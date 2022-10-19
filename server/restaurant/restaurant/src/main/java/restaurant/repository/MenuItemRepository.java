package restaurant.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import restaurant.model.MenuItem;

@Component
public interface MenuItemRepository extends JpaRepository<MenuItem, Long>{
	
	Page<MenuItem> findAll(Pageable pageable);
	
	Page<MenuItem> findByNameContains(Pageable pageable, String name);
	
}
