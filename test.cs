using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using Firebase;
using Firebase.Auth;
using Firebase.Extensions;

public class FirebaseController : MonoBehaviour
{
    public GameObject game,
        LoginPanel,
        SignupPanel,
        ProfilePanel,
        ChangePassPanel,
        NotificationPanel;

    public TMP_InputField loginEmail,
        loginPassword,
        signupEmail,
        signupPassword,
        signupCPassword,
        signupUserName,
        forgetPasswordEmail;

    public Text notificationTitleText,
        notificationDescriptionText,
        profileUserName_Text,
        profileEmail_Text;

    public Toggle rememberMe;

    public Button signupButton,
        loginButton,
        logoutButton,
        backButton,
        closeButton,
        forgetPasswordButton,
        createAnNewAccountButton,
        loginAgainProfilePannelButton,
        forgetPasswordButtonInPannel,
        PlayButtonOnProfilePannel;

    Firebase.Auth.FirebaseAuth auth;
    Firebase.Auth.FirebaseUser user;
    bool isSignIn = false;

    private void Start()
    {
        signupButton.onClick.AddListener(openLoginPanel);
        loginButton.onClick.AddListener(openProfilePanel);
        logoutButton.onClick.AddListener(openLoginPanel);
        backButton.onClick.AddListener(openLoginPanel);
        closeButton.onClick.AddListener(CloseNotificationMessage);
        forgetPasswordButton.onClick.AddListener(openChangePasswordPanel);
        createAnNewAccountButton.onClick.AddListener(openSignupPanel);
        loginAgainProfilePannelButton.onClick.AddListener(openLoginPanel);
        //ForgotPassword
        forgetPasswordButtonInPannel.onClick.AddListener(ForgotPassword);
        //play game
        PlayButtonOnProfilePannel.onClick.AddListener(PlayGame);

        Firebase.FirebaseApp
            .CheckAndFixDependenciesAsync()
            .ContinueWith(task =>
            {
                var dependencyStatus = task.Result;
                if (dependencyStatus == Firebase.DependencyStatus.Available)
                {
                    InitializeFirebase();
                }
                else
                {
                    Debug.LogError(
                        System.String.Format(
                            "Could not resolve all Firebase dependencies: {0}",
                            dependencyStatus
                        )
                    );
                }
            });
    }

    public void openLoginPanel()
    {
        LoginPanel.SetActive(true);
        SignupPanel.SetActive(false);
        ProfilePanel.SetActive(false);
        ChangePassPanel.SetActive(false);
    }

    public void PlayGame()
    {
        LoginPanel.SetActive(false);
        SignupPanel.SetActive(false);
        ProfilePanel.SetActive(false);
        ChangePassPanel.SetActive(false);
        game.SetActive(true);
    }

    public void openSignupPanel()
    {
        LoginPanel.SetActive(false);
        SignupPanel.SetActive(true);
        ProfilePanel.SetActive(false);
        ChangePassPanel.SetActive(false);
    }

    public void openProfilePanel()
    {
        LoginPanel.SetActive(false);
        SignupPanel.SetActive(false);
        ProfilePanel.SetActive(true);
        ChangePassPanel.SetActive(false);

        // Check if a user is signed in
        if (auth.CurrentUser != null)
        {
            profileUserName_Text.text = auth.CurrentUser.DisplayName;
            profileEmail_Text.text = auth.CurrentUser.Email;
        }
    }

    public void openChangePasswordPanel()
    {
        LoginPanel.SetActive(false);
        SignupPanel.SetActive(false);
        ProfilePanel.SetActive(false);
        ChangePassPanel.SetActive(true);
    }

    public void LoginUser()
    {
        if (string.IsNullOrEmpty(loginEmail.text) || string.IsNullOrEmpty(loginPassword.text))
        {
            ShowNotificationMessage("Error", "Fields Empty, Please Input Details In All Fields");
            return;
        }
        SignInUser(loginEmail.text, loginPassword.text);
    }

    public void SignupUser()
    {
        if (
            string.IsNullOrEmpty(signupEmail.text)
            || string.IsNullOrEmpty(signupPassword.text)
            || string.IsNullOrEmpty(signupCPassword.text)
            || string.IsNullOrEmpty(signupUserName.text)
        )
        {
            ShowNotificationMessage("Error", "Fields Empty, Please Input Details In All Fields");
            return;
        }
        CreateUser(signupEmail.text, signupPassword.text, signupUserName.text);
    }

    public void ForgetPassword()
    {
        if (string.IsNullOrEmpty(forgetPasswordEmail.text))
        {
            ShowNotificationMessage("Error", "Fields Empty, Please Input Details In All Fields");
            Debug.Log("han ji sahi hai forget password");
            return;
        }
    }

    ///////////////////////////////////////////////////////////////using coroutine, notification messege close after 4 sec ///////////////////////////////////

    private void ShowNotificationMessage(string title, string description)
    {
        notificationTitleText.text = title;
        notificationDescriptionText.text = description;
        NotificationPanel.SetActive(true);

        // Start a coroutine to close the notification panel after the specified duration
        StartCoroutine(CloseNotificationAfterDelay());
    }

    // Coroutine to close the notification panel after a specified delay
    private IEnumerator CloseNotificationAfterDelay()
    {
        yield return new WaitForSeconds(4);
        NotificationPanel.SetActive(false);
    }

    /////////////////////////////////////////////////////////////////////////////////////////// notification messege close after 4 sec ///////////////////////////////////
    public void CloseNotificationMessage()
    {
        notificationTitleText.text = "";
        notificationDescriptionText.text = "";
        NotificationPanel.SetActive(false);
    }

    public void Logout()
    {
        auth.SignOut();
        profileUserName_Text.text = "";
        profileEmail_Text.text = "";
        LoginUser();
    }

    void CreateUser(string email, string password, string username)
    {
        auth.CreateUserWithEmailAndPasswordAsync(email, password)
            .ContinueWithOnMainThread(task =>
            {
                if (task.IsCanceled)
                {
                    Debug.LogError("CreateUserWithEmailAndPasswordAsync was canceled.");
                    return;
                }
                if (task.IsFaulted)
                {
                    Debug.LogError(
                        "CreateUserWithEmailAndPasswordAsync encountered an error: "
                            + task.Exception
                    );

                    foreach (Exception exception in task.Exception.Flatten().InnerExceptions)
                    {
                        Firebase.FirebaseException firebaseEx =
                            exception as Firebase.FirebaseException;
                        if (firebaseEx != null)
                        {
                            var errorCode = (AuthError)firebaseEx.ErrorCode;
                            ShowNotificationMessage("Error", GetErrorMessage(errorCode));
                        }
                    }
                    return;
                }

                // Firebase user has been created.
                Firebase.Auth.AuthResult result = task.Result;
                Debug.LogFormat(
                    "Firebase user created successfully: {0} ({1})",
                    result.User.DisplayName,
                    result.User.UserId
                );

                UpdateUserProfile(username);
            });
    }

    public void SignInUser(string email, string password)
    {
        auth.SignInWithEmailAndPasswordAsync(email, password)
            .ContinueWithOnMainThread(task =>
            {
                if (task.IsCanceled)
                {
                    Debug.LogError("SignInWithEmailAndPasswordAsync was canceled.");
                    return;
                }
                if (task.IsFaulted)
                {
                    Debug.LogError(
                        "SignInWithEmailAndPasswordAsync encountered an error: " + task.Exception
                    );
                    foreach (Exception exception in task.Exception.Flatten().InnerExceptions)
                    {
                        Firebase.FirebaseException firebaseEx =
                            exception as Firebase.FirebaseException;
                        if (firebaseEx != null)
                        {
                            var errorCode = (AuthError)firebaseEx.ErrorCode;
                            ShowNotificationMessage("Error", GetErrorMessage(errorCode));
                        }
                    }

                    return;
                }

                Firebase.Auth.AuthResult result = task.Result;
                Debug.LogFormat(
                    "User signed in successfully: {0} ({1})",
                    result.User.DisplayName,
                    result.User.UserId
                );

                profileUserName_Text.text = result.User.DisplayName;
                profileEmail_Text.text = result.User.Email;
                openProfilePanel();
            });
    }

    void InitializeFirebase()
    {
        auth = Firebase.Auth.FirebaseAuth.DefaultInstance;
        auth.StateChanged += AuthStateChanged;
        AuthStateChanged(this, null);
    }

    void AuthStateChanged(object sender, System.EventArgs eventArgs)
    {
        if (auth.CurrentUser != user)
        {
            bool signedIn =
                user != auth.CurrentUser && auth.CurrentUser != null && auth.CurrentUser.IsValid();
            if (!signedIn && user != null)
            {
                Debug.Log("Signed out " + user.UserId);
            }
            user = auth.CurrentUser;
            if (signedIn)
            {
                Debug.Log("Signed in " + user.UserId);
                isSignIn = true;
            }
        }
    }

    /*void OnDestroy()
    {
        auth.StateChanged -= AuthStateChanged;
        auth = null;
    }*/

    void UpdateUserProfile(string userName)
    {
        Firebase.Auth.FirebaseUser user = auth.CurrentUser;
        if (user != null)
        {
            Firebase.Auth.UserProfile profile = new Firebase.Auth.UserProfile
            {
                DisplayName = userName,
                PhotoUrl = new System.Uri("https://picsum.photos/id/237/200/300/"),
            };
            user.UpdateUserProfileAsync(profile)
                .ContinueWith(task =>
                {
                    if (task.IsCanceled)
                    {
                        Debug.LogError("UpdateUserProfileAsync was canceled.");
                        return;
                    }
                    if (task.IsFaulted)
                    {
                        Debug.LogError(
                            "UpdateUserProfileAsync encountered an error: " + task.Exception
                        );
                        return;
                    }

                    Debug.Log("User profile updated successfully.");
                    ShowNotificationMessage("Alert", "Account Successfully Created");
                });
        }
    }

    string GetErrorMessage(AuthError errorCode)
    {
        string message = "";
        switch (errorCode)
        {
            case AuthError.MissingEmail:
                message = "Missing email.";
                break;
            case AuthError.MissingPassword:
                message = "Missing password.";
                break;
            case AuthError.WeakPassword:
                message = "The password is too weak.";
                break;
            case AuthError.InvalidEmail:
                message = "Invalid email.";
                break;
            case AuthError.EmailAlreadyInUse:
                message = "The email is already in use.";
                break;
            case AuthError.WrongPassword:
                message = "Wrong password.";
                break;
            case AuthError.UserNotFound:
                message = "User not found.";
                break;
            case AuthError.UserTokenExpired:
                message = "The user's token has expired.";
                break;
            default:
                message = "An unknown error occurred.";
                break;
        }
        return message;
    }

    /////forget password

    public void ForgotPassword()
    {
        if (string.IsNullOrEmpty(forgetPasswordEmail.text))
        {
            ShowNotificationMessage("Error", "Fields Empty, Please Input Details In All Fields");
            return;
        }

        ResetPassword(forgetPasswordEmail.text);
    }

    void ResetPassword(string email)
    {
        auth.SendPasswordResetEmailAsync(email)
            .ContinueWithOnMainThread(task =>
            {
                if (task.IsCanceled)
                {
                    Debug.LogError("SendPasswordResetEmailAsync was canceled.");
                    return;
                }
                if (task.IsFaulted)
                {
                    Debug.LogError(
                        "SendPasswordResetEmailAsync encountered an error: " + task.Exception
                    );
                    return;
                }

                Debug.Log("Password reset email sent successfully.");
                ShowNotificationMessage(
                    "Success",
                    "Password reset email sent. Please check your email."
                );
                openLoginPanel();
            });
    }
}
