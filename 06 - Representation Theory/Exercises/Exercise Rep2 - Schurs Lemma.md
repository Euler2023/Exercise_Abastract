---
title: "Exercise Rep2: Schur's Lemma"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - representation-theory
  - proof
source: "Serre, Linear Representations of Finite Groups"
created: 2025-01-19
---

# Exercise Rep2: Schur's Lemma

## Problem Statement

> [!question] Exercise
> Prove **Schur's Lemma**:
>
> Let $(\rho_1, V_1)$ and $(\rho_2, V_2)$ be irreducible representations of $G$ over an algebraically closed field $F$. Let $\phi: V_1 \to V_2$ be a $G$-homomorphism.
>
> 1. $\phi$ is either zero or an isomorphism.
> 2. If $V_1 = V_2$ (same representation), then $\phi = \lambda \cdot \text{id}$ for some $\lambda \in F$.

## Hints

> [!hint]- Hint 1
> Show that $\ker(\phi)$ and $\text{im}(\phi)$ are subrepresentations.

> [!hint]- Hint 2
> Use irreducibility: subrepresentations are either $\{0\}$ or the whole space.

> [!hint]- Hint 3
> For part 2, consider an eigenvalue $\lambda$ of $\phi$ (exists since $F$ is algebraically closed).

## Solution

> [!success]- Solution
> ### Proof of Part 1
> **Claim: $\ker(\phi)$ is a subrepresentation of $V_1$.**
>
> For $v \in \ker(\phi)$ and $g \in G$:
> $$\phi(\rho_1(g)v) = \rho_2(g)\phi(v) = \rho_2(g) \cdot 0 = 0$$
> So $\rho_1(g)v \in \ker(\phi)$.
>
> **Claim: $\text{im}(\phi)$ is a subrepresentation of $V_2$.**
>
> For $w = \phi(v) \in \text{im}(\phi)$ and $g \in G$:
> $$\rho_2(g)w = \rho_2(g)\phi(v) = \phi(\rho_1(g)v) \in \text{im}(\phi)$$
>
> **Applying irreducibility:**
> - Since $V_1$ is irreducible: $\ker(\phi) = \{0\}$ or $\ker(\phi) = V_1$
> - Since $V_2$ is irreducible: $\text{im}(\phi) = \{0\}$ or $\text{im}(\phi) = V_2$
>
> **Cases:**
> - If $\ker(\phi) = V_1$, then $\phi = 0$
> - If $\ker(\phi) = \{0\}$ and $\text{im}(\phi) = V_2$, then $\phi$ is an isomorphism
> - If $\ker(\phi) = \{0\}$ and $\text{im}(\phi) = \{0\}$, impossible (injective implies non-trivial image)
>
> ### Proof of Part 2
> Suppose $V_1 = V_2 = V$ and $\phi: V \to V$ is a $G$-homomorphism.
>
> Since $F$ is algebraically closed, $\phi$ has an eigenvalue $\lambda \in F$.
>
> Consider $\psi = \phi - \lambda \cdot \text{id}$.
>
> **Claim: $\psi$ is also a $G$-homomorphism.**
> $$\psi(\rho(g)v) = \phi(\rho(g)v) - \lambda\rho(g)v = \rho(g)\phi(v) - \lambda\rho(g)v = \rho(g)\psi(v)$$
>
> Since $\lambda$ is an eigenvalue, $\ker(\psi) \neq \{0\}$.
>
> By part 1, since $\psi$ is not an isomorphism, we must have $\psi = 0$.
>
> Therefore $\phi = \lambda \cdot \text{id}$. $\square$

## Applications

> [!tip] Uses of Schur's Lemma
> 1. Proves orthogonality of characters
> 2. Shows endomorphisms of irreducibles are scalars
> 3. Key to proving Wedderburn's theorem

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]
- [[04 - Module Theory/Concepts/Module Homomorphisms|Module Homomorphisms]]
