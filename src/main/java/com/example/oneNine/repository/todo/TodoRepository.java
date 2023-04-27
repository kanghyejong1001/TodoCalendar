package com.example.oneNine.repository.todo;

import com.example.oneNine.domain.todo.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {

    Todo findByTodoId(long todoId);

    Todo findBytodoName(String todoName);
}
