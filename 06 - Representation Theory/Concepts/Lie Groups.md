---
title: Lie Groups
topic: representation-theory
tags:
  - concept
  - definition
  - representation-theory
  - lie-theory
created: 2026-01-19
---

# Lie Groups

## Definition

> [!info] Definition (Lie Group)
> A **Lie group** is a group $G$ that is also a smooth manifold, such that the group operations are smooth maps:
> - Multiplication: $m: G \times G \to G$, $(g, h) \mapsto gh$
> - Inversion: $i: G \to G$, $g \mapsto g^{-1}$

Equivalently: a group object in the category of smooth manifolds.

## Matrix Lie Groups

Most important Lie groups arise as matrix groups:

> [!info] Definition (Matrix Lie Group)
> A **matrix Lie group** is a closed subgroup of $\text{GL}_n(\mathbb{C})$ (or $\text{GL}_n(\mathbb{R})$).

### Classical Groups

| Group | Definition | Dimension | Compact? |
|-------|------------|-----------|----------|
| $\text{GL}_n(\mathbb{R})$ | Invertible $n \times n$ real matrices | $n^2$ | No |
| $\text{GL}_n(\mathbb{C})$ | Invertible $n \times n$ complex matrices | $2n^2$ | No |
| $\text{SL}_n(\mathbb{R})$ | $\det(A) = 1$ | $n^2 - 1$ | No |
| $\text{SL}_n(\mathbb{C})$ | $\det(A) = 1$ | $2(n^2 - 1)$ | No |
| $\text{O}(n)$ | $A^T A = I$ | $\frac{n(n-1)}{2}$ | Yes |
| $\text{SO}(n)$ | $A^T A = I$, $\det = 1$ | $\frac{n(n-1)}{2}$ | Yes |
| $\text{U}(n)$ | $A^\dagger A = I$ | $n^2$ | Yes |
| $\text{SU}(n)$ | $A^\dagger A = I$, $\det = 1$ | $n^2 - 1$ | Yes |
| $\text{Sp}(n)$ | Symplectic matrices | $n(2n+1)$ | Yes |

### Key Examples

> [!example] Example 1: $\text{SO}(2)$ - Rotations in the Plane
> $$\text{SO}(2) = \left\{\begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix} : \theta \in \mathbb{R}\right\}$$
> Topologically: $\text{SO}(2) \cong S^1$ (circle).

> [!example] Example 2: $\text{SU}(2)$ - Unit Quaternions
> $$\text{SU}(2) = \left\{\begin{pmatrix} \alpha & -\bar{\beta} \\ \beta & \bar{\alpha} \end{pmatrix} : |\alpha|^2 + |\beta|^2 = 1\right\}$$
> Topologically: $\text{SU}(2) \cong S^3$ (3-sphere).

> [!example] Example 3: $\text{SO}(3)$ - Rotations in 3D
> $\dim \text{SO}(3) = 3$ (axis + angle).
> $\text{SU}(2) \to \text{SO}(3)$ is a 2-to-1 covering (spin double cover).

## Properties

### Connected Components

| Group | $\pi_0(G)$ (components) |
|-------|------------------------|
| $\text{GL}_n(\mathbb{R})$ | $\mathbb{Z}/2\mathbb{Z}$ |
| $\text{O}(n)$ | $\mathbb{Z}/2\mathbb{Z}$ |
| $\text{GL}_n(\mathbb{C})$ | Trivial (connected) |
| $\text{SL}_n$, $\text{SU}(n)$, $\text{SO}(n)$ | Trivial (connected) |

### Fundamental Groups

| Group | $\pi_1(G)$ |
|-------|------------|
| $\text{SO}(2)$ | $\mathbb{Z}$ |
| $\text{SO}(3)$ | $\mathbb{Z}/2\mathbb{Z}$ |
| $\text{SU}(2)$ | Trivial (simply connected) |
| $\text{SU}(n)$ | Trivial |
| $\text{SO}(n)$, $n \geq 3$ | $\mathbb{Z}/2\mathbb{Z}$ |

## The Lie Algebra

> [!info] Key Connection
> Every Lie group $G$ has an associated **Lie algebra** $\mathfrak{g} = T_e G$, the tangent space at the identity.
>
> For matrix groups: $\mathfrak{g} = \{X : e^{tX} \in G \text{ for all } t\}$

| Lie Group | Lie Algebra | Description |
|-----------|-------------|-------------|
| $\text{GL}_n$ | $\mathfrak{gl}_n$ | All $n \times n$ matrices |
| $\text{SL}_n$ | $\mathfrak{sl}_n$ | Traceless matrices |
| $\text{O}(n)$, $\text{SO}(n)$ | $\mathfrak{so}_n$ | Skew-symmetric: $X^T = -X$ |
| $\text{U}(n)$ | $\mathfrak{u}_n$ | Skew-Hermitian: $X^\dagger = -X$ |
| $\text{SU}(n)$ | $\mathfrak{su}_n$ | Skew-Hermitian + traceless |

## Homomorphisms

> [!info] Definition
> A **Lie group homomorphism** $\phi: G \to H$ is a smooth group homomorphism.

> [!abstract] Theorem
> Every Lie group homomorphism $\phi: G \to H$ induces a Lie algebra homomorphism $d\phi: \mathfrak{g} \to \mathfrak{h}$.
>
> If $G$ is simply connected, the converse holds: Lie algebra homomorphisms lift to Lie group homomorphisms.

## Representations

> [!info] Definition
> A **representation** of a Lie group $G$ is a smooth homomorphism $\rho: G \to \text{GL}(V)$.

For compact Lie groups:
- Every representation decomposes into irreducibles (complete reducibility)
- Irreducibles are finite-dimensional
- Peter-Weyl theorem describes $L^2(G)$

## Classification

> [!abstract] Theorem (Cartan's Classification)
> Simple compact Lie groups are:
> - Classical: $\text{SU}(n)$, $\text{SO}(n)$, $\text{Sp}(n)$
> - Exceptional: $G_2$, $F_4$, $E_6$, $E_7$, $E_8$

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[06 - Representation Theory/Concepts/Representations of Lie Algebras|Representations of Lie Algebras]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]
- [[Group Theory Hub|Groups]]
