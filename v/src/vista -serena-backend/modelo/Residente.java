package vista_serena.modelo;

public class Residente {
    private int huesped_ID;
    private String cedula_id;
    private String name;
    private String lastName;
    private String address;
    private String phoneNumber;
    private String email;
    private String birthDate;

    // Constructores
    public Residente() {}
    
    public Residente(int huesped_ID, String cedula_id, String name, String lastName, String address, String phoneNumber, String email, String birthDate) {
        this.huesped_ID = huesped_ID;
        this.cedula_id = cedula_id
        this.name = name;
        this.lastName = lastName;
        this.address = address
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.birthDate = birthDate
    }

    // Getters y Setters
    public int gethuesped_ID() { return huesped_ID; }
    public void sethuesped_ID(int huesped_ID) { this.huesped_ID = huesped_ID; }

    public String getcedula_id() { return cedula_id; }
    public void setNombre(String cedula_id) { this.cedula_id = cedula_id; }

    public String getname() { return name; }
    public void setname(String name) { this.name = name; }

    public String getlastName() { return lastName; }
    public void setlastName(String lastName) { this.lastName = lastName; }

    public String getaddress() { return address; }
    public void setaddress(String address) { this.address = address; }

    public String getphoneNumber() { return phoneNumber; }
    public void setphoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }

    public String getemail() { return email; }
    public void setemail(String email) { this.email = email; }

    public String getbirthDate() { return birthDate; }
    public void setbirthDate(String birthDate) { this.birthDate = birthDate; }

}