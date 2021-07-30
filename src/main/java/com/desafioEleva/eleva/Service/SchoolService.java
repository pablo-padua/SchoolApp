package com.desafioEleva.eleva.Service;

import com.desafioEleva.eleva.DTO.SchoolDTO;
import com.desafioEleva.eleva.Entity.School;
import org.springframework.context.annotation.Profile;

import java.util.List;

@Profile("!test")
public interface SchoolService {

    School addSchool(SchoolDTO schoolDTO);

    List<School> getSchools();

}