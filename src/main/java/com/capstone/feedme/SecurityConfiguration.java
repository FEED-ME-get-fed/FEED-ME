package com.capstone.feedme;

import com.capstone.feedme.services.UserDetailsLoader;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    private UserDetailsLoader usersLoader;

    public SecurityConfiguration(UserDetailsLoader usersLoader) {
        this.usersLoader = usersLoader;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .userDetailsService(usersLoader) // How to find users by their username
                .passwordEncoder(passwordEncoder()) // How to encode and verify passwords
        ;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http

//                .authorizeRequests()
//                .antMatchers().authenticated().antMatchers("/**").permitAll();

                /* Login configuration */
                .formLogin()
                .loginPage("/login")
                .defaultSuccessUrl("/recipes") // user's home page, it can be any URL
                .permitAll(true) // Anyone can go to the login page
                /* Logout configuration */
                .and()
                .logout()
                .logoutSuccessUrl("/login?logout") // append a query string value
                /* Pages that can be viewed without having to log in */
                .and()
                .authorizeRequests()
                .antMatchers("/", "/admin", "/admin/admin-details-to-db", "/admin/get-recipes", "/admin/get-details") // anyone can see the home and the recipe pages
                .permitAll()
                /* Pages that require authentication */
                .and()
                .authorizeRequests()
                .antMatchers(
//                        "/recipes/create",// only authenticated users can create recipe
//                        "/recipes/edit",
                        "/user/profile"
//                        "/user/{id}/profile"// only authenticated users can edit recipe
                )
                .authenticated()

        ;
    }
}
