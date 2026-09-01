import { featuredProjects, type Project, type ProjectMedia } from "./projects";

type MediaCopy = { alt: string; caption: string };

const source = (slug: string) => {
  const project = featuredProjects.find((item) => item.slug === slug);
  if (!project) throw new Error(`Missing project: ${slug}`);
  return project;
};

const translateMedia = (media: ProjectMedia[], copy: MediaCopy[]) =>
  media.map((item, index) => ({ ...item, ...(copy[index] ?? {}) }));

const translateCode = (
  examples: Project["codeExamples"],
  copy: { title: string; explanation: string }[],
) => examples.map((item, index) => ({ ...item, ...(copy[index] ?? {}) }));

const m2sSource = source("m2s");
const fishSource = source("fishdrone");
const boatSource = source("boatvision");

const m2s: Project = {
  ...m2sSource,
  title: "M2S, a connected medical dispenser",
  context: "I-NOVGAMES #4, patient monitoring",
  role: "Technical lead, electronics and embedded AI",
  summary:
    "A modular demonstrator that identifies the caregiver, addresses the correct bin, checks the dose through vision and logs each delivery.",
  question:
    "How can medication delivery be automated while preserving explicit identification, verification before release and an auditable record?",
  contribution: [
    "Split the system into a master controller, a vision node and addressable bin controllers.",
    "Developed the state machine, actuator control and communication between boards.",
    "Integrated RFID, LoRa, the Python Dash interface and SQLite storage.",
    "Prepared the validation scenarios and the final working demonstration.",
  ],
  architecture: [
    { label: "Orchestration", value: "STM32F746G-DISCO, local interface, caregiver RFID identification and global state" },
    { label: "Dispensing", value: "One NUCLEO-G431RB per bin, stepper motor, stock RFID and LoRa addressing" },
    { label: "Verification", value: "NUCLEO-F767ZI, camera, image analysis and a gate locked by default" },
    { label: "Traceability", value: "Python service, UDP over Ethernet, Dash interface and SQLite database" },
  ],
  outcome:
    "The demonstrator was presented at Centrale Méditerranée and received the Best Prototyping Award. The public repository separates the protocol, firmware and monitoring software.",
  proof: "Best Prototyping Award",
  cover: {
    ...m2sSource.cover,
    alt: "Final M2S prototype with two bins, dispensing mechanism and collection ramp",
    caption: "Final prototype photographed in the Fablab with two motorised bins and the collection ramp.",
  },
  gallery: translateMedia(m2sSource.gallery, [
    { alt: "M2S prototype during integration with two motorised bins", caption: "Mechanical, wiring and bin integration during testing." },
    { alt: "Side view of the M2S prototype on the workbench", caption: "Side view showing the bins, frame and mechanical path." },
    { alt: "3D-printed parts for the M2S bin mechanism", caption: "Detail of a printed bin module with its circular housing and guide." },
    { alt: "I-NOVGAMES 2025 award", caption: "Award received by the team during the I-NOVGAMES final." },
    { alt: "M2S system diagram linking bins, vision, interface, RFID and gate", caption: "Target architecture. The medication path remains separate from data exchanges." },
    { alt: "M2S login, patient, stock and monitoring screens", caption: "Application journey: authentication, prescription, stock and history." },
    { alt: "M2S sequence from RFID identification to validation", caption: "The gate remains closed until vision validates the expected dose." },
    { alt: "CAD models of an M2S vertical bin and tray", caption: "Storage and dispensing mechanism before fabrication." },
    { alt: "M2S gate test with servo motor and NUCLEO-F767ZI", caption: "Command chain used to test locking and opening." },
    { alt: "Wired STM32 board during early M2S tests", caption: "Board-level testing before subsystem integration." },
  ]),
  video: m2sSource.video
    ? { ...m2sSource.video, title: "Mechanism demonstration", caption: "A 16-second sequence showing both types of parts being dispensed by the final prototype." }
    : undefined,
  documents: m2sSource.documents?.map((document) => ({
    ...document,
    title: "M2S final presentation",
    description: "Twelve-slide final presentation covering the problem, hospital constraints, architecture, mechanics, LoRa, AI, server and demonstration.",
  })),
  evidenceSource:
    "Progress presentation, specifications and Drive documents cross-checked against the firmware and software in the public repository.",
  frame: {
    label: "I-NOVGAMES #4",
    organizer: "Campus Industrie du Futur Sud and I-NOVMICRO partners, with a hackathon hosted by STMicroelectronics in Rousset",
    format: "Six schools, about 60 students, one hackathon, three months of prototyping and a final",
    brief: "Use embedded technology to rethink patient monitoring and strengthen the link between patients, caregivers and relatives.",
    value: "The jury assessed originality, feasibility and impact. The team focused on medication logistics to build a complete, testable physical sequence.",
  },
  distinctions: [{
    ...m2sSource.distinctions[0],
    title: "Best Prototyping Award",
    issuer: "I-NOVGAMES #4",
    note: "Award granted to the demonstrator presented by the M2S team.",
    image: m2sSource.distinctions[0]?.image
      ? { ...m2sSource.distinctions[0].image, alt: "I-NOVGAMES 2025 award" }
      : undefined,
  }],
  milestones: [
    { date: "October 2025", title: "Scoping", detail: "Problem selection, use case and functional split." },
    { date: "November 2025 – January 2026", title: "Prototype", detail: "Electronics, mechanics, communication and interface integration." },
    { date: "29 January 2026", title: "Final", detail: "Working demonstration and jury presentation." },
  ],
  stakes: [
    "Prevent the wrong bin or dose from being released.",
    "Keep the mechanism locked until verification succeeds.",
    "Address several modular bins without duplicating orchestration logic.",
    "Record useful events for monitoring and diagnosis.",
  ],
  systemFlow: [
    "The caregiver is identified through RFID and selects the patient and prescription.",
    "The master sends an addressed LoRa command with a CRC16 check.",
    "The selected bin actuates its motor and reports completion.",
    "The vision node checks the expected elements before authorising release.",
    "The server stores the action and updates the monitoring interface.",
  ],
  hardware: [
    { label: "STM32F746G-DISCO", value: "Master controller and local interaction" },
    { label: "NUCLEO-G431RB", value: "Modular bin controller" },
    { label: "NUCLEO-F767ZI", value: "Vision and safety-gate controller" },
    { label: "RFID", value: "Caregiver identification and stock tracking" },
    { label: "LoRa", value: "Addressed communication between modules" },
    { label: "Motors and servo", value: "Dispensing and controlled release" },
  ],
  software: [
    { label: "C/C++ and MicroPython", value: "Firmware, state machines and drivers" },
    { label: "Python Dash", value: "Monitoring interface" },
    { label: "SQLite", value: "Local traceability" },
    { label: "UDP over Ethernet", value: "Embedded-to-server link" },
    { label: "CRC16 and heartbeat", value: "Frame integrity and availability monitoring" },
  ],
  engineering: [
    { title: "One controller per responsibility", copy: "The master, bins and vision node can evolve and be diagnosed independently." },
    { title: "A smaller demonstrator than the target", copy: "The prototype validates the critical sequence without pretending to be a hospital-ready product." },
    { title: "Safe by default", copy: "The gate remains locked until the expected state and vision result are confirmed." },
    { title: "Evidence after action", copy: "The interface and database retain events instead of hiding failures behind a final status." },
  ],
  constraints: [
    { constraint: "Several identical bins", response: "Address each node and centralise orchestration.", evidence: "LoRa protocol and bin firmware." },
    { constraint: "Unreliable radio frames", response: "Add type, address, sequence and CRC16 fields.", evidence: "Public protocol implementation." },
    { constraint: "Unsafe mechanical release", response: "Require a positive vision decision before opening the gate.", evidence: "State machine and verification flow." },
    { constraint: "Demonstrator deadline", response: "Validate the critical path first, then integrate the interface and traceability.", evidence: "Final prototype and presentation." },
  ],
  codeExamples: translateCode(m2sSource.codeExamples, [
    { title: "An addressed and checked frame", explanation: "The packet carries a destination, message type, sequence and CRC so the receiver can reject incomplete or unrelated commands." },
    { title: "Vision decides, the master authorises", explanation: "The master waits for an explicit verification result before allowing the gate to open." },
    { title: "Four criteria before validation", explanation: "The image-processing branch checks the expected conditions and returns a clear result rather than a visual guess." },
  ]),
  limits: [
    "The prototype demonstrates the sequence but is not a certified medical device.",
    "The mechanical system uses two bins and does not validate hospital-scale capacity.",
    "Vision was evaluated on a controlled demonstrator, not under all lighting and occlusion conditions.",
    "LoRa and Ethernet choices were validated for the prototype, not qualified for production deployment.",
  ],
  lessons: [
    "Safety rules should shape the state machine before integration begins.",
    "A modular protocol makes both extension and diagnosis easier.",
    "A demonstrator is more credible when its limits are stated next to its results.",
  ],
  sources: [
    "M2S specifications, progress deck and final presentation",
    "Public firmware, protocol and monitoring repository",
    "Prototype photographs and demonstration video",
  ],
};

const fishdrone: Project = {
  ...fishSource,
  title: "FishDrone, an autonomous surface vessel",
  context: "I-NOVGAMES, marine biodiversity",
  role: "Embedded development, sensor integration and design contribution",
  summary: "A surface robot designed to patrol an area, avoid obstacles and associate a visual observation with a GPS position.",
  question: "How can a student-built surface vessel combine navigation, obstacle avoidance and visual detection within limited hardware and test time?",
  contribution: [
    "Integrated five VL53L1X time-of-flight sensors on a shared I²C bus.",
    "Developed non-blocking avoidance logic and the mission scheduling loop.",
    "Contributed to the hull, propulsion and electrical integration choices.",
    "Separated observed, simulated and still-unverified capabilities in the final assessment.",
  ],
  architecture: [
    { label: "Mission", value: "GPS waypoint following, operating modes and telemetry heartbeat" },
    { label: "Safety", value: "Five ToF sensors and priority obstacle-avoidance state" },
    { label: "Propulsion", value: "Two independently controlled thrusters for differential steering" },
    { label: "Perception", value: "Camera pipeline for vessel detection and geolocated alerts" },
  ],
  outcome: "The team assembled a physical vessel, documented the navigation and sensing chain, and received the Jury's Favourite Award plus a verifiable Open Badge.",
  proof: "Physical prototype and Jury's Favourite Award",
  cover: { ...fishSource.cover, alt: "FishDrone physical prototype with metal hull, deck and central enclosure", caption: "Assembled mechanical demonstrator before full in-water validation." },
  gallery: translateMedia(fishSource.gallery, [
    { alt: "Initial FishDrone prototype sketch", caption: "Early allocation of hull, propulsion, sensing and onboard electronics." },
    { alt: "Side view of the FishDrone hull", caption: "Assembled metal hull with an external shrouded thruster." },
    { alt: "FishDrone team during the hackathon", caption: "Collective scoping before splitting design, navigation and vision tasks." },
    { alt: "FishDrone stability simulation", caption: "Simplified SciPy model used to study the return to equilibrium." },
    { alt: "Vessel-detection result", caption: "Faster R-CNN test from the report; several vessels remain undetected." },
    { alt: "FishDrone team planning", caption: "Project organisation and allocation of design and integration work." },
    { alt: "I-NOVGAMES hackathon participants", caption: "Teams and partners gathered during the biodiversity challenge." },
    { alt: "FishDrone pitch to the jury", caption: "Concept presentation and engineering discussion." },
  ]),
  physicalBuild: fishSource.physicalBuild ? {
    title: "From welded hull to assembled demonstrator",
    summary: "The build combined available workshop materials, differential propulsion and a central electronics volume. Photographs prove assembly, not maritime qualification.",
    stages: fishSource.physicalBuild.stages.map((stage, index) => ({
      ...stage,
      ...[
        { title: "Frame the vessel", copy: "The team translated the mission into hull, propulsion, sensing and electronics blocks.", observation: "The sketch documents intent; it is not a validated naval design." },
        { title: "Fabricate the metal hull", copy: "Sheet-metal elements were welded into a rigid structure with internal cross-members.", observation: "The hull and welds are visible; watertightness is not established by photographs." },
        { title: "Integrate wiring and internal volume", copy: "Power and signal paths were routed inside the hull while preserving access for integration.", observation: "Internal wiring and available volume are documented before closure." },
        { title: "Add the deck and central enclosure", copy: "The deck and central box provide a working volume for electronics and observation hardware.", observation: "The enclosure is a prototype element, not a certified waterproof housing." },
        { title: "Install differential propulsion", copy: "Two rear thrusters enable forward motion and turning without a rudder.", observation: "The two thrusters are installed; thrust, consumption and endurance are not measured." },
        { title: "Assemble the demonstrator", copy: "Hull, deck, central enclosure and propulsion form a coherent physical demonstrator.", observation: "The final land-based assembly is documented; no extended sea trial is available." },
      ][index],
      media: {
        ...stage.media,
        alt: [
          "Initial FishDrone system sketch",
          "Welded metal FishDrone hull",
          "Wiring inside the FishDrone hull",
          "FishDrone deck and central enclosure",
          "Two shrouded FishDrone thrusters",
          "Assembled FishDrone demonstrator",
        ][index],
        caption: [
          "Initial functional layout.",
          "Metal structure during fabrication.",
          "Internal integration before closing the deck.",
          "Deck and central box during assembly.",
          "Rear differential-propulsion arrangement.",
          "Completed mechanical demonstrator on land.",
        ][index],
      },
    })),
    checks: [
      { subject: "Hull and structure", state: "Assembly observed", evidence: "Photographs of the welded sheet metal, cross-members, deck and central enclosure." },
      { subject: "Propulsion", state: "Integration observed", evidence: "Two shrouded thrusters installed; no thrust or endurance curve available." },
      { subject: "Stability", state: "Simplified simulation", evidence: "Modelled return below one degree after roughly 15 seconds from a ten-degree initial angle." },
      { subject: "Watertightness", state: "To be validated", evidence: "No immersion protocol or extended test result in the available material." },
      { subject: "Autonomous mission", state: "Subsystems tested separately", evidence: "Navigation and avoidance firmware documented; onboard vision and alerting remained incomplete." },
    ],
  } : undefined,
  evidenceSource: "Project report, specifications and ToF notes cross-checked against the public firmware and prototype photographs.",
  frame: {
    label: "I-NOVGAMES 2025",
    organizer: "Campus Industrie du Futur Sud, academic and industrial partners",
    format: "Scoping hackathon in Gardanne, development phase and expert-jury final",
    brief: "Use embedded systems to observe marine biodiversity and contribute to the detection of suspicious activity.",
    value: "The challenge required the team to connect a physical vessel, autonomous behaviour and perception while remaining honest about the prototype's validation level.",
  },
  distinctions: [
    { ...fishSource.distinctions[0], title: "Jury's Favourite Award", note: "Award granted to the FishDrone team during the final." },
    { ...fishSource.distinctions[1], title: "I-NOVGAMES 2025 Open Badge", note: "Verifiable credential associated with participation in the programme." },
    { ...fishSource.distinctions[2], title: "Second in the provisional ranking", note: "Intermediate milestone before the final presentation." },
  ],
  milestones: [
    { date: "October 2024", title: "Hackathon", detail: "Mission framing, concept selection and team organisation." },
    { date: "2024–2025", title: "Design", detail: "Hull, propulsion, sensors, navigation, simulation and perception work." },
    { date: "2025", title: "Final", detail: "Prototype and technical argument presented to the jury." },
  ],
  stakes: [
    "Keep collision avoidance above navigation and perception priorities.",
    "Operate several identical I²C sensors without address conflicts.",
    "Build a stable vessel with the materials and workshop time available.",
    "Separate simulation results from physical tests and target capabilities.",
  ],
  systemFlow: [
    "Update GPS, simulated radar, ToF sensors and incoming telemetry.",
    "Evaluate power mode and give avoidance control priority when required.",
    "Run camera and alert processing only when the safety state allows it.",
    "Follow the current waypoint when no avoidance manoeuvre is active.",
    "Transmit position, mode and heartbeat telemetry.",
  ],
  hardware: [
    { label: "STM32H7", value: "Main embedded target" },
    { label: "5 × VL53L1X", value: "Short-range obstacle sensing" },
    { label: "GPS", value: "Position and waypoint navigation" },
    { label: "Two thrusters", value: "Differential propulsion" },
    { label: "Camera", value: "Visual observation and vessel detection" },
    { label: "Metal hull", value: "Workshop-built physical platform" },
  ],
  software: [
    { label: "STM32duino / C++", value: "Mission, sensor and avoidance firmware" },
    { label: "I²C address reassignment", value: "Shared bus for identical ToF sensors" },
    { label: "Non-blocking states", value: "Responsive mission scheduling" },
    { label: "SciPy", value: "Simplified stability simulation" },
    { label: "PyTorch / OpenCV", value: "Perception experiments" },
  ],
  engineering: [
    { title: "Avoidance takes control", copy: "Safety behaviour interrupts normal navigation instead of competing with it." },
    { title: "Five sensors, one bus", copy: "Shutdown pins allow each VL53L1X to receive a unique address before normal operation." },
    { title: "A simulated radar for mission testing", copy: "The placeholder exercises system logic without claiming an operational maritime radar." },
    { title: "Navigation and vision tested separately", copy: "Subsystem separation made progress measurable even before full integration." },
    { title: "Build with available resources", copy: "The physical design reflects workshop constraints and access to materials." },
  ],
  constraints: [
    { constraint: "Identical default I²C addresses", response: "Boot sensors one by one and assign a unique address.", evidence: "ToF initialisation firmware." },
    { constraint: "Reactive safety", response: "Use a non-blocking avoidance state with higher priority than navigation.", evidence: "Avoidance and mission-loop code." },
    { constraint: "Limited marine testing", response: "Keep simulation, bench evidence and unverified claims separate.", evidence: "Report, photographs and validation table." },
    { constraint: "Detection data mismatch", response: "Treat vision as an experimental subsystem rather than a completed onboard capability.", evidence: "Detection examples and documented misses." },
  ],
  codeExamples: translateCode(fishSource.codeExamples, [
    { title: "Assign five I²C addresses", explanation: "Each sensor is brought online separately through its shutdown pin before receiving a unique address on the shared bus." },
    { title: "Non-blocking avoidance", explanation: "The state machine changes manoeuvres from elapsed time and sensor conditions without freezing the rest of the mission loop." },
    { title: "Schedule the complete mission", explanation: "The loop updates inputs, power, safety, perception, navigation and telemetry in an explicit order." },
  ]),
  limits: [
    "The radar is simulated and the ToF sensors are not an operational maritime perception system.",
    "The available Faster R-CNN example misses several vessels.",
    "The stability result comes from a simplified model, not an in-water measurement.",
    "Photographs prove assembly, not watertightness, thrust or endurance.",
    "No extended basin or sea trial is documented.",
    "Onboard STM32H7 vision and authority reporting remained incomplete.",
  ],
  lessons: [
    "Explicit priority in the control loop prevents navigation from competing with safety.",
    "I²C addressing must be designed before multiplying identical sensors.",
    "Simulation, bench tests and real capability must remain clearly separated.",
  ],
  sources: [
    "Project report, specifications, ToF note and final presentation",
    "Public FishDrone architecture, wiring and firmware",
    "Prototype photographs and verifiable I-NOVGAMES credential",
  ],
};

const boatvision: Project = {
  ...boatSource,
  title: "BoatVision, embedded detection and OCR",
  context: "SISN project, Centrale Méditerranée",
  role: "AI development and architecture comparison",
  summary: "An embedded-AI study comparing a multitask MobileNetV2 network with a YOLOv5n-plus-CRNN pipeline to detect a vessel and read its name.",
  question: "Which architecture best balances shared computation, available annotations, diagnostic clarity and future STM32 deployment?",
  contribution: [
    "Implemented the multitask MobileNetV2 architecture and the specialised detection–OCR pipeline.",
    "Prepared datasets, training code and qualitative evaluation figures.",
    "Analysed the effect of incompatible annotations on architecture selection.",
    "Documented failed OCR results and the unfinished embedded deployment instead of overstating performance.",
  ],
  architecture: [
    { label: "Shared option", value: "MobileNetV2 backbone with detection and OCR heads" },
    { label: "Specialised option", value: "YOLOv5n detector followed by a CRNN on cropped regions" },
    { label: "Sequence learning", value: "Convolutional features, two bidirectional LSTMs and CTC decoding" },
    { label: "Deployment path", value: "ONNX export, INT8 quantisation and X-Cube-AI considered for STM32H747" },
  ],
  outcome: "YOLOv5n produced the strongest qualitative detection results. OCR remained undertrained, the multitask network did not complete training and full STM32 deployment remained open.",
  proof: "Documented comparison with explicit limitations",
  cover: { ...boatSource.cover, alt: "Grid of vessels detected by YOLOv5n in BoatVision", caption: "Detection sample included in the final project material." },
  gallery: translateMedia(boatSource.gallery, [
    { alt: "BoatVision multitask and specialised architectures", caption: "A shared backbone compared with a detection-then-OCR pipeline." },
    { alt: "BoatVision vessel detections", caption: "Qualitative output from the specialised detector." },
    { alt: "BoatVision confusion matrix", caption: "Confusion matrix produced during YOLOv5n evaluation." },
    { alt: "BoatVision precision curve", caption: "Effect of confidence threshold on precision." },
    { alt: "Incorrect OCR outputs on vessel names", caption: "OCR errors are retained to show the limits of both data and model." },
  ]),
  evidenceSource: "BoatVision report and presentation cross-checked against the public PyTorch classes, pipeline and Model Card.",
  frame: {
    label: "SISN Project 2025",
    organizer: "Centrale Méditerranée, Intelligent and Digital Systems module",
    format: "Architecture study, implementation, training experiments and final technical report",
    brief: "Detect a vessel and read its identifier while preparing for deployment on a constrained STM32H747 target.",
    value: "The project demonstrates that dataset structure and deployment constraints can matter more than theoretical architectural elegance.",
  },
  distinctions: [],
  stakes: [
    "Fit detection and OCR into a constrained embedded target.",
    "Work with datasets that do not share the same annotations.",
    "Keep detection errors separable from recognition errors.",
    "Avoid presenting notebook results as proof of microcontroller deployment.",
  ],
  systemFlow: [
    "Load an image and run vessel detection.",
    "Retain bounding boxes above the selected confidence threshold.",
    "Crop each detected region for name recognition.",
    "Convert convolutional features into a sequence and decode it through CTC.",
    "Return boxes, confidence values and optional vessel identifiers.",
  ],
  hardware: [
    { label: "STM32H747I-DISCO", value: "Target dual-core Cortex-M7/M4 board" },
    { label: "Flash", value: "Project constraint around 2 MB" },
    { label: "RAM", value: "Project constraint around 1 MB" },
    { label: "Compute", value: "Up to 480 MHz without a dedicated GPU" },
    { label: "Camera", value: "Planned image source on the surface drone" },
  ],
  software: [
    { label: "MobileNetV2", value: "Compact shared feature extractor" },
    { label: "YOLOv5n", value: "Compact specialised detector" },
    { label: "CRNN", value: "Convolutional blocks, two BiLSTMs and character output" },
    { label: "CTC", value: "Training and decoding variable-length text" },
    { label: "PyTorch", value: "Model definition, training and inference" },
    { label: "ONNX / X-Cube-AI", value: "Planned path to the microcontroller" },
  ],
  engineering: [
    { title: "Share features", copy: "MultiTaskNet avoids duplicate feature extraction but requires jointly annotated images." },
    { title: "Specialise each stage", copy: "YOLOv5n and CRNN can use separate datasets and be diagnosed independently." },
    { title: "Keep failure visible", copy: "The public pipeline explicitly marks the untrained multitask mode as unfinished." },
    { title: "Prepare deployment early", copy: "Operator support, activation memory and quantisation should influence model choice before training ends." },
  ],
  constraints: [
    { constraint: "Incompatible annotations", response: "Compare a shared model with a specialised pipeline that accepts two datasets.", evidence: "Report, Model Card and model classes." },
    { constraint: "Variable-length text", response: "Use a CNN, two bidirectional LSTMs and CTC decoding.", evidence: "CRNN class and decode_ctc function." },
    { constraint: "STM32H747 memory", response: "Consider MobileNetV2 or a nano YOLO model, ONNX export and INT8 quantisation.", evidence: "Documented target architecture; deployment unfinished." },
    { constraint: "Weak OCR results", response: "Preserve errors and request more representative maritime data.", evidence: "OCR figures and Model Card limitations." },
  ],
  codeExamples: translateCode(boatSource.codeExamples, [
    { title: "One backbone, two outputs", explanation: "MultiTaskNet shares MobileNetV2 features before splitting detection and OCR. The potential compute saving depends on joint training that was not completed." },
    { title: "A sequence for CTC decoding", explanation: "Convolutional features become a width-wise sequence. Two BiLSTMs model context before the CTC-compatible output." },
    { title: "Detect, crop, then read", explanation: "The specialised pipeline keeps each stage inspectable so OCR can be evaluated independently of localisation." },
  ]),
  limits: [
    "No available dataset jointly annotated both the vessel box and its name.",
    "Synthetic OCR training was insufficient for maritime images.",
    "Colab sessions limited experiment duration and depth.",
    "ONNX conversion, quantisation and X-Cube-AI integration were not completed.",
    "README metrics are not repeated because matching public training logs are unavailable.",
  ],
  lessons: [
    "Annotation availability can determine architecture before theory does.",
    "A specialised pipeline simplifies diagnosis when detection progresses faster than OCR.",
    "A notebook result does not prove compatibility with microcontroller memory and operators.",
  ],
  sources: [
    "BoatVision report and SISN 2025 presentation",
    "Public README, Model Card, PyTorch classes and pipeline",
    "Evaluation figures and OCR examples produced during the project",
  ],
};

export const englishProjects: Project[] = [m2s, fishdrone, boatvision];

export function getEnglishProject(slug: string) {
  return englishProjects.find((project) => project.slug === slug);
}
