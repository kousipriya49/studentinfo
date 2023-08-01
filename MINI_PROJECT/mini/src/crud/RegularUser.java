package crud;

public class RegularUser extends User {

    public RegularUser(String username, String password) {
        super(username, password, "RegularUser");
    }

    @Override
    public boolean canInsert() {
        return true;
    }
    public String getUserType() {
        return "RegularUser";
    }
    @Override
    public boolean canUpdate() {
        return true;
    }

    @Override
    public boolean canDelete() {
        return false;
    }
}
