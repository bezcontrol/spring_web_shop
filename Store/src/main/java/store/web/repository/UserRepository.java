package store.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import store.web.model.User;


public interface UserRepository extends JpaRepository<User, String> {
    User findByLogin(String login);
    User findByEmail(String email);
}