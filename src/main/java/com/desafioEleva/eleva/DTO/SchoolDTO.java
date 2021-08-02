package com.desafioEleva.eleva.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SchoolDTO {

    Long schoolCode;
    String schoolName;
    Long studentCount;
    Long classCount;
    Long employeesCount;
    String schoolPhoneNumber;
    String city;
    String state;
    String country;
    String schoolEmail;
    String principal;

}
