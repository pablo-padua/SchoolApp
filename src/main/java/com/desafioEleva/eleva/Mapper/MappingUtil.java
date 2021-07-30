package com.desafioEleva.eleva.Mapper;

import com.desafioEleva.eleva.Repository.SchoolRepository;
import org.mapstruct.Named;
import org.springframework.stereotype.Component;

@Component
public class MappingUtil {

    private final SchoolRepository schoolRepository;

    MappingUtil(SchoolRepository schoolRepository) {
        this.schoolRepository = schoolRepository;
    }

    @Named("GetSchoolObject")
    public Long getSchoolObject(Long school){
        schoolRepository.findBySchoolCode(school);
        return school;
    }

}
