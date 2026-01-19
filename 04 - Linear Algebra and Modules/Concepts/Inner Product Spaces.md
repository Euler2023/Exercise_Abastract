---
title: Inner Product Spaces
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
created: 2026-01-19
---

# Inner Product Spaces

## Definition

> [!info] Definition (Inner Product)
> An **inner product** on a [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|vector space]] $V$ over $F$ ($\mathbb{R}$ or $\mathbb{C}$) is a function $\langle \cdot, \cdot \rangle: V \times V \to F$ satisfying:
> 1. **Linearity**: $\langle \alpha u + \beta v, w \rangle = \alpha \langle u, w \rangle + \beta \langle v, w \rangle$
> 2. **Conjugate symmetry**: $\langle u, v \rangle = \overline{\langle v, u \rangle}$
> 3. **Positive definiteness**: $\langle v, v \rangle \geq 0$, with equality iff $v = 0$

> [!info] Definition (Inner Product Space)
> A vector space equipped with an inner product is called an **inner product space** (or pre-Hilbert space).

## Induced Structures

> [!info] Definition (Norm)
> $\|v\| = \sqrt{\langle v, v \rangle}$

> [!info] Definition (Distance)
> $d(u, v) = \|u - v\|$

> [!info] Definition (Angle)
> $\cos \theta = \frac{\langle u, v \rangle}{\|u\| \|v\|}$ (for real spaces)

## Key Properties

> [!abstract] Cauchy-Schwarz Inequality
> $$|\langle u, v \rangle| \leq \|u\| \|v\|$$

> [!abstract] Triangle Inequality
> $$\|u + v\| \leq \|u\| + \|v\|$$

> [!abstract] Parallelogram Law
> $$\|u + v\|^2 + \|u - v\|^2 = 2\|u\|^2 + 2\|v\|^2$$

## Orthogonality

> [!info] Definition (Orthogonal)
> Vectors $u, v$ are **orthogonal** if $\langle u, v \rangle = 0$, written $u \perp v$.

> [!info] Definition (Orthonormal Basis)
> A basis $\{e_1, \ldots, e_n\}$ is **orthonormal** if $\langle e_i, e_j \rangle = \delta_{ij}$.

> [!abstract] Gram-Schmidt Process
> Any basis can be orthonormalized: given $\{v_1, \ldots, v_n\}$, produce orthonormal $\{e_1, \ldots, e_n\}$.

## Examples

> [!example] Example 1: Euclidean space
> $\mathbb{R}^n$ with $\langle x, y \rangle = \sum_{i=1}^n x_i y_i$ (dot product).

> [!example] Example 2: Complex space
> $\mathbb{C}^n$ with $\langle x, y \rangle = \sum_{i=1}^n x_i \overline{y_i}$.

> [!example] Example 3: Function space
> $L^2[a,b]$ with $\langle f, g \rangle = \int_a^b f(x)\overline{g(x)} dx$.

> [!example] Example 4: Matrix space
> $M_n(\mathbb{C})$ with $\langle A, B \rangle = \text{tr}(B^*A)$ (Frobenius inner product).

## Orthogonal Complement

> [!info] Definition
> For [[04 - Linear Algebra and Modules/Concepts/Subspaces|subspace]] $W \subseteq V$:
> $$W^\perp = \{v \in V : \langle v, w \rangle = 0 \text{ for all } w \in W\}$$

> [!abstract] Theorem
> For finite-dimensional $V$: $V = W \oplus W^\perp$ and $\dim W + \dim W^\perp = \dim V$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]] (spectral theorem)
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]] (adjoint operators)
