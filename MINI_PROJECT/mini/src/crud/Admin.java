package crud;

public class Admin extends User {
    public Admin(String username, String password) {
        super(username, password, "Admin");
    }

    // Overriding methods for CRUD permissions
    @Override
    public boolean canInsert() {
        return true;
    }

    @Override
    public boolean canUpdate() {
        return true;
    }

    @Override
    public boolean canDelete() {
        return true;
    }
    public String getUserType() {
        return "Admin";
    }
}
