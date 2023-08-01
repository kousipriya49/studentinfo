package crud;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UserManager {
    private Connection connection;

    public UserManager(Connection connection) {
        this.connection = connection;
    }
    public User loginUser(String username, String password) throws SQLException {
        String query = "SELECT * FROM users WHERE username=? AND password=?";
        PreparedStatement pst = connection.prepareStatement(query);
        pst.setString(1, username);
        pst.setString(2, password);
        ResultSet rs = pst.executeQuery();

        if (rs.next()) {
            // Check if "user_type" column is null before calling equalsIgnoreCase
            String userType = rs.getString("user_type");
            if (userType != null && userType.equalsIgnoreCase("admin")) {
                return new Admin(username, password);
            } else if (userType != null && userType.equalsIgnoreCase("regular")) {
                return new RegularUser(username, password);
            }
        }
        rs.close();
        pst.close();

        return null;
    }
}
