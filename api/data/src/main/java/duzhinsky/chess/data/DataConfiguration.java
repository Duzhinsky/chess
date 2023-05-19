package duzhinsky.chess.data;

import duzhinsky.chess.data.game.Position;
import java.util.List;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.converter.Converter;
import org.springframework.data.convert.ReadingConverter;
import org.springframework.data.convert.WritingConverter;
import org.springframework.data.mongodb.core.convert.MongoCustomConversions;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@ComponentScan(basePackages = {"duzhinsky.chess.data"})
@EnableMongoRepositories
public class DataConfiguration {

    @Bean
    public MongoCustomConversions customConversions() {
        return new MongoCustomConversions(
            List.of(new PositionToStringConverter(), new StringToPositionConverter()));
    }

    @WritingConverter
    public static class PositionToStringConverter implements Converter<Position, String> {
        @Override
        public String convert(Position position) {
            return position.getX() + ";" + position.getY();
        }
    }

    @ReadingConverter
    public static class StringToPositionConverter implements Converter<String, Position> {
        @Override
        public Position convert(String posString) {
            var p = posString.split(";");
            return new Position(Integer.parseInt(p[0]), Integer.parseInt(p[1]));
        }
    }
}
