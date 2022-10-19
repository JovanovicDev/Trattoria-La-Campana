package restaurant.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import restaurant.model.Category;

@Component
public interface CategoryRepository extends JpaRepository<Category, Long>{

}
