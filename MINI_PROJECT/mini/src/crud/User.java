package crud;

public abstract class User {
    private String username;
    private String password;
    private String userType; // Add userType field to store the user type

    public User(String username, String password, String userType) {
        this.username = username;
        this.password = password;
        this.userType = userType;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getUserType() {
        return userType;
    }

    public abstract boolean canInsert();

    public abstract boolean canUpdate();

    public abstract boolean canDelete();
}
