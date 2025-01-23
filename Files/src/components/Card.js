import { Heading, HStack, Image, Text, VStack, Box, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      borderRadius="md"
      overflow="hidden"
      backgroundColor="white"
      boxShadow="md"
    >
      {/* Image Section */}
      <Image src={imageSrc} alt={title} objectFit="cover" width="100%" height="200px" />

      {/* Content Section */}
      <VStack align="start" p={4} spacing={4}>
        {/* Title */}
        <Heading as="h3" size="md" color="black">
          {title}
        </Heading>

        {/* Description */}
        <Text color="gray.600" fontSize="sm">
          {description}
        </Text>

        {/* Read More Link */}
        <HStack spacing={2} color="teal.500">
          <Link fontWeight="bold" href="#">
            See More
          </Link>
          <FontAwesomeIcon icon={faArrowRight} />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
