package com.desafioEleva.eleva.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ClassroomDTO {

    Long classCode;
    Long term;
    String professor;
    String program;
    String classCoordinator;
    Double tuitionFee;
    String email;
    Double entranceMinGrade;
    Double breakTime;
    String cityName;
    Long gradYear;
    Long entranceYear;
    Long studentsCount;
    Long availableSeats;
    Long school;

}
