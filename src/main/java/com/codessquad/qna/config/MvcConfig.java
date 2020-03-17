package com.codessquad.qna.config;

import com.codessquad.qna.util.Paths;
import org.graalvm.compiler.replacements.nodes.ArrayEqualsNode;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.setOrder(Ordered.HIGHEST_PRECEDENCE);
        registry.addViewController("").setViewName(Paths.HOME_TEMPLATE);
        registry.addViewController("/users/join").setViewName("user/form");
        registry.addViewController("/loginForm").setViewName("user/login");
    }
}
