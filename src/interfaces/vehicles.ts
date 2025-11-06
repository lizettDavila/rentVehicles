export interface Vehicles {
    driver_id:     string;
    driver_name:   string;
    plate:         string;
    model:         string;
    type:          string;
    capacity:      string;
    creation_date: Date;
    id:            string;
    city:          string;
}


export interface Drivers {
    company_id:    number;
    city:          number;
    first_name:    string;
    last_name:     string;
    email:         string;
    phone:         string;
    avatar_url:    string;
    status:        string;
    creation_date: Date;
    id:            string;
}
