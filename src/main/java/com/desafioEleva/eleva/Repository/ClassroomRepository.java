package com.desafioEleva.eleva.Repository;

import com.desafioEleva.eleva.Entity.Classroom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClassroomRepository extends JpaRepository<Classroom, Long> {

    Boolean existsByClassCode(Long classCode);

    Classroom findByClassCode(Long classCode);

    void deleteByClassCode(Long classCode);

}
