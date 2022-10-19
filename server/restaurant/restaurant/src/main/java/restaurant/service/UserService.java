package restaurant.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import restaurant.model.User;
import restaurant.repository.UserRepository;

@Component
public class UserService {
	
	@Autowired
	UserRepository userRepository;

	public User validateUser(String username, String password) {
		return userRepository.findByUsernameAndPassword(username, password);
	}
	
}
