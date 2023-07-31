package crud;

public class DatabaseConnector extends BaseDatabaseConnector {
    public DatabaseConnector() {
        super("jdbc:mysql://localhost:3306/mini", "root", "Pr@040903");
    }

    // You can add additional methods specific to the DatabaseConnector here if needed.
}
