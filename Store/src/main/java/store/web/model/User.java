package store.web.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Objects;

@Getter @Setter
@Entity
@Table(name = "users")
public class User {
    @Id
    @Column(name = "user_id")
    private String id;
    @Column(name = "name")
    private String name;
    @Column(name = "surname")
    private String surname;
    @Column(name = "login")
    private String login;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;
    @Column(name = "avatar")
    private String avatar;


    public User() {
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        User user = (User) o;
        return id == user.id &&
                Objects.equals(name, user.name) &&
                Objects.equals(surname, user.surname) &&
                Objects.equals(login, user.login) &&
                Objects.equals(email, user.email) &&
                Objects.equals(password, user.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, surname, login, email, password);
    }

    @Override
    public String toString() {
        return "User" + " -> " +
                "id=" + id + ", " +
                "name='" + name + "', " +
                "surname='" + surname + "', " +
                "login='" + login + "', " +
                "email='" + email + "', " +
                "password='" + password + "'";
    }
}
