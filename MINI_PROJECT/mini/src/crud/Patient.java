package crud;

public class Patient {
    private int id;
    private String name;
    private String address;
    private String phnno;
    private int age;
    private String sex;
    private String illness;
    private String billItems;
    private double billAmount;

    public Patient(int id, String name, String address, String phoneNumber, int age, String sex, String illness, String billItems, double billAmount) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phnno = phoneNumber;
        this.age = age;
        this.sex = sex;
        this.illness = illness;
        this.billItems = billItems;
        this.billAmount = billAmount;
    }

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhnno() {
		return phnno;
	}

	public void setPhnno(String phnno) {
		this.phnno = phnno;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getIllness() {
		return illness;
	}

	public void setIllness(String illness) {
		this.illness = illness;
	}

	public String getBillItems() {
		return billItems;
	}

	public void setBillItems(String billItems) {
		this.billItems = billItems;
	}

	public double getBillAmount() {
		return billAmount;
	}

	public void setBillAmount(double billAmount) {
		this.billAmount = billAmount;
	}

    // Getters and setters (omitted for brevity)
}
