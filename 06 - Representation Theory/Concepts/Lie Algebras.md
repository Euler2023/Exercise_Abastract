---
title: Lie Algebras
topic: representation-theory
tags:
  - concept
  - definition
  - representation-theory
  - lie-theory
created: 2026-01-19
---

# Lie Algebras

## Definition

> [!info] Definition (Lie Algebra)
> A **Lie algebra** over a field $F$ is a vector space $\mathfrak{g}$ equipped with a bilinear operation $[\cdot, \cdot]: \mathfrak{g} \times \mathfrak{g} \to \mathfrak{g}$ (the **Lie bracket**) satisfying:
>
> 1. **Antisymmetry**: $[X, Y] = -[Y, X]$
> 2. **Jacobi identity**: $[X, [Y, Z]] + [Y, [Z, X]] + [Z, [X, Y]] = 0$

## Examples

### Matrix Lie Algebras

> [!example] Example 1: $\mathfrak{gl}_n(F)$
> All $n \times n$ matrices with bracket $[A, B] = AB - BA$ (commutator).
> Dimension: $n^2$.

> [!example] Example 2: $\mathfrak{sl}_n(F)$
> Traceless matrices: $\{A \in \mathfrak{gl}_n : \text{tr}(A) = 0\}$.
> Dimension: $n^2 - 1$.

> [!example] Example 3: $\mathfrak{so}_n(F)$
> Skew-symmetric matrices: $\{A : A^T = -A\}$.
> Dimension: $\frac{n(n-1)}{2}$.

> [!example] Example 4: $\mathfrak{su}_n$
> Skew-Hermitian traceless: $\{A : A^\dagger = -A, \text{tr}(A) = 0\}$.
> Dimension: $n^2 - 1$.

### The Fundamental Example: $\mathfrak{sl}_2$

$$\mathfrak{sl}_2 = \text{span}\{e, f, h\}$$

where:
$$e = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}, \quad f = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}, \quad h = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$

**Bracket relations**:
$$[h, e] = 2e, \quad [h, f] = -2f, \quad [e, f] = h$$

### Abstract Lie Algebras

> [!example] Example 5: Abelian Lie Algebra
> Any vector space with $[X, Y] = 0$ for all $X, Y$.

> [!example] Example 6: Heisenberg Algebra
> $\mathfrak{h}_3 = \text{span}\{x, y, z\}$ with $[x, y] = z$, all others zero.
> (Models $[q, p] = i\hbar$ in quantum mechanics)

## Subalgebras and Ideals

> [!info] Definition
> - A **subalgebra** $\mathfrak{h} \subseteq \mathfrak{g}$ is a subspace closed under bracket.
> - An **ideal** $\mathfrak{i} \subseteq \mathfrak{g}$ satisfies $[\mathfrak{g}, \mathfrak{i}] \subseteq \mathfrak{i}$.

### Important Ideals

| Ideal | Definition | Notation |
|-------|------------|----------|
| Center | $\{X : [X, Y] = 0 \ \forall Y\}$ | $Z(\mathfrak{g})$ |
| Derived algebra | $[\mathfrak{g}, \mathfrak{g}]$ | $\mathfrak{g}'$ or $[\mathfrak{g}, \mathfrak{g}]$ |
| Radical | Maximal solvable ideal | $\text{rad}(\mathfrak{g})$ |

## Homomorphisms

> [!info] Definition
> A **Lie algebra homomorphism** $\phi: \mathfrak{g} \to \mathfrak{h}$ is a linear map satisfying:
> $$\phi([X, Y]) = [\phi(X), \phi(Y)]$$

The kernel is always an ideal.

## Structure Theory

### Solvable and Nilpotent

> [!info] Definition
> - $\mathfrak{g}$ is **solvable** if the derived series terminates: $\mathfrak{g}^{(n)} = 0$.
> - $\mathfrak{g}$ is **nilpotent** if the lower central series terminates: $\mathfrak{g}^n = 0$.

$$\text{nilpotent} \Rightarrow \text{solvable}$$

> [!example]
> The Heisenberg algebra is nilpotent (hence solvable).
> Upper triangular matrices form a solvable (but not nilpotent for $n > 2$) Lie algebra.

### Semisimple and Simple

> [!info] Definition
> - $\mathfrak{g}$ is **simple** if it has no non-trivial ideals and $\dim \mathfrak{g} > 1$.
> - $\mathfrak{g}$ is **semisimple** if $\text{rad}(\mathfrak{g}) = 0$.

> [!abstract] Theorem
> $\mathfrak{g}$ is semisimple $\iff$ $\mathfrak{g} = \mathfrak{g}_1 \oplus \cdots \oplus \mathfrak{g}_k$ (direct sum of simple ideals).

### The Killing Form

> [!info] Definition
> The **Killing form** is:
> $$\kappa(X, Y) = \text{tr}(\text{ad}_X \circ \text{ad}_Y)$$
> where $\text{ad}_X(Y) = [X, Y]$.

> [!abstract] Cartan's Criterion
> - $\mathfrak{g}$ is solvable $\iff$ $\kappa(X, Y) = 0$ for all $X \in \mathfrak{g}$, $Y \in [\mathfrak{g}, \mathfrak{g}]$
> - $\mathfrak{g}$ is semisimple $\iff$ $\kappa$ is non-degenerate

## Universal Enveloping Algebra

> [!info] Definition
> The **universal enveloping algebra** $U(\mathfrak{g})$ is the associative algebra:
> $$U(\mathfrak{g}) = T(\mathfrak{g}) / \langle X \otimes Y - Y \otimes X - [X, Y] \rangle$$

> [!abstract] PBW Theorem
> If $\{X_1, \ldots, X_n\}$ is a basis of $\mathfrak{g}$, then:
> $$\{X_1^{a_1} \cdots X_n^{a_n} : a_i \geq 0\}$$
> is a basis of $U(\mathfrak{g})$.

Representations of $\mathfrak{g}$ correspond to $U(\mathfrak{g})$-modules.

## Classification

> [!abstract] Theorem (Cartan-Killing Classification)
> Simple complex Lie algebras are classified by Dynkin diagrams:
>
> | Type | Algebra | Rank |
> |------|---------|------|
> | $A_n$ | $\mathfrak{sl}_{n+1}$ | $n$ |
> | $B_n$ | $\mathfrak{so}_{2n+1}$ | $n$ |
> | $C_n$ | $\mathfrak{sp}_{2n}$ | $n$ |
> | $D_n$ | $\mathfrak{so}_{2n}$ | $n$ |
> | $E_6, E_7, E_8$ | Exceptional | 6, 7, 8 |
> | $F_4$ | Exceptional | 4 |
> | $G_2$ | Exceptional | 2 |

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[06 - Representation Theory/Concepts/sl2 Representations|sl₂ Representations]]
- [[06 - Representation Theory/Concepts/Root Systems|Root Systems]]
- [[06 - Representation Theory/Concepts/Semisimple Lie Algebras|Semisimple Lie Algebras]]
