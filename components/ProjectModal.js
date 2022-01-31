import React, { useState, useEffect } from "react";
import { projectData } from "../pages/api/projectsData";
import Image from "next/image";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useDisclosure, Lorem } from "@chakra-ui/react";

const ProjectModal = ({ ProjID }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState(projectData);
  return (
    // <>
    //   <Button onClick={onOpen}>Open Modal</Button>

    //   <Modal isOpen={isOpen} onClose={onClose}>
    //     <ModalOverlay />
    //     <ModalContent>
    //       <ModalHeader>Modal Title</ModalHeader>
    //       <ModalCloseButton />
    //       <ModalBody>
    //         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quos
    //         nisi alias quas corporis in enim corrupti consequuntur, veniam ab
    //         suscipit odio libero recusandae eligendi mollitia labore quis sint
    //         ad officiis rem vero dolores consectetur magni eius! Quae quod
    //         dolor, quos corporis dicta nam ipsam eligendi dolores nisi
    //         exercitationem. Consequuntur.
    //       </ModalBody>

    //       <ModalFooter>
    //         <Button colorScheme="blue" mr={3} onClick={onClose}>
    //           Close
    //         </Button>
    //         <Button variant="ghost">Secondary Action</Button>
    //       </ModalFooter>
    //     </ModalContent>
    //   </Modal>
    // </>
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mentors</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* {curElem.mentors_id.map((mentor, j) => {
              return (
                <h6 className="mb-3 text-sm text-gray-400" key={j}>
                  {j + 1}. {mentor.name}
                </h6>
              );
            })} */}
            {ProjID.project_id}
            {/* {console.log(ProjID.mentors_id)} */}
            {ProjID.mentors_id.map((mentor, j) => {
              <p>{mentor.name}</p>;
              {
                console.log(mentor.name);
              }
            })}
            {/* {data.map((curElem, i) => {
              return (
               {cu}
              );
            })} */}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectModal;
