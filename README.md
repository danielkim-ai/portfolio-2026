# Daniel's AI Research & Engineering Portfolio

I am a Research Assistant at AI-ISL, Yonsei University, building research systems at the intersection of Bayesian reinforcement learning, differential privacy, and machine unlearning. This portfolio gathers implementations, mathematical notes, and reproducible project records for trustworthy sequential decision-making in data-limited and regulated settings.

[Download CV](./public/Seok_Daniel_Kim_CV.pdf) | [Portfolio Website](https://danielkim-ai.vercel.app) | [LinkedIn](https://www.linkedin.com/in/danielkim-ai/)

## Project Showcase

### Bayesian RL Meets MCMC

Bayesian reinforcement learning experiments focused on sample efficiency, posterior-aware policy learning, SGLD-based recalibration, and regret analysis with the sub-linear target $\tilde{O}(\sqrt{dT})$.

[View Details](./projects/bayesian-rl-meets-mcmc/README.md)

### Trustworthy Offline RL via DP & Machine Unlearning

Privacy-preserving offline RL research centered on $(\epsilon, \delta)$-DP, trajectory-level adjacency, conservative value learning under privacy noise, and influence function-based unlearning for deletion requests.

[View Details](./projects/trustworthy-offline-rl-via-dp/README.md)

## Technical Breadth

| Area | Tools and Methods |
| --- | --- |
| Deep Learning | PyTorch, neural actor-critic models, automatic differentiation |
| Reinforcement Learning | Ray RLlib, MuJoCo, offline RL, CQL/IQL-oriented value learning |
| Privacy and Unlearning | Opacus, Differential Privacy, trajectory clipping, RDP accounting, influence functions, SISA sharding |
| Statistical Research | Bayesian inference, MCMC, SGLD, variational inference, regret analysis |
| Research Engineering | Reproducible experiments, CLI workflows, technical documentation, evaluation diagnostics |

## Coursework & Knowledge Base

The portfolio site also collects study notes that connect classical statistical foundations to modern RL systems:

- [STA3123: Sampling Theory](https://danielkim-ai.vercel.app/coursework/sta3123-sampling-theory) links finite-population inference, Horvitz-Thompson weighting, privacy amplification, and unlearning-aware sharding.
- [CS285: Deep Reinforcement Learning Series](https://danielkim-ai.vercel.app/coursework) covers RL foundations, policy optimisation, actor-critic methods, and offline/meta-RL notes.

## Repository Map

```text
portfolio/
  public/Seok_Daniel_Kim_CV.pdf
  projects/
    bayesian-rl-meets-mcmc/
    trustworthy-offline-rl-via-dp/
  src/content/coursework/
```

## Contact

- Email: [coderpoirot@gmail.com](mailto:coderpoirot@gmail.com)
- Yonsei Email: [daniel1kim@yonsei.ac.kr](mailto:daniel1kim@yonsei.ac.kr)
- Portfolio: [danielkim-ai.vercel.app](https://danielkim-ai.vercel.app)
