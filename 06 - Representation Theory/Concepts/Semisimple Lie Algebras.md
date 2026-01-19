---
title: Semisimple Lie Algebras
topic: representation-theory
tags:
  - concept
  - definition
  - representation-theory
  - lie-theory
created: 2026-01-19
---

# Semisimple Lie Algebras

## Definitions

> [!info] Definition (Simple Lie Algebra)
> A Lie algebra $\mathfrak{g}$ is **simple** if:
> 1. $\dim \mathfrak{g} > 1$
> 2. The only ideals are $\{0\}$ and $\mathfrak{g}$

> [!info] Definition (Semisimple Lie Algebra)
> A Lie algebra $\mathfrak{g}$ is **semisimple** if its radical is zero:
> $$\text{rad}(\mathfrak{g}) = 0$$
>
> Equivalently: $\mathfrak{g}$ has no non-zero solvable ideals.

> [!abstract] Theorem
> $\mathfrak{g}$ is semisimple $\iff$ $\mathfrak{g} \cong \mathfrak{g}_1 \oplus \cdots \oplus \mathfrak{g}_k$ where each $\mathfrak{g}_i$ is simple.

## Characterizations

> [!abstract] Cartan's Criterion
> For a Lie algebra $\mathfrak{g}$ over a field of characteristic 0:
>
> $\mathfrak{g}$ is semisimple $\iff$ the Killing form $\kappa$ is non-degenerate.

### The Killing Form

> [!info] Definition
> The **Killing form** is the symmetric bilinear form:
> $$\kappa(X, Y) = \text{tr}(\text{ad}_X \circ \text{ad}_Y)$$

Properties for semisimple $\mathfrak{g}$:
- Non-degenerate (by Cartan's criterion)
- Invariant: $\kappa([X, Y], Z) = \kappa(X, [Y, Z])$
- Restricts to non-degenerate form on Cartan subalgebra

## Structure Theory

### Cartan Subalgebra

> [!info] Definition
> A **Cartan subalgebra** $\mathfrak{h} \subset \mathfrak{g}$ is a maximal abelian subalgebra consisting of semisimple elements.

Properties:
- $\mathfrak{h}$ is unique up to conjugation
- $\dim \mathfrak{h} = \text{rank}(\mathfrak{g})$
- All elements of $\mathfrak{h}$ are simultaneously diagonalizable in any representation

### Root Space Decomposition

> [!abstract] Theorem
> Every semisimple Lie algebra decomposes as:
> $$\mathfrak{g} = \mathfrak{h} \oplus \bigoplus_{\alpha \in \Phi} \mathfrak{g}_\alpha$$
>
> where $\Phi \subset \mathfrak{h}^*$ is the root system and:
> $$\mathfrak{g}_\alpha = \{X \in \mathfrak{g} : [H, X] = \alpha(H)X \ \forall H \in \mathfrak{h}\}$$

Each root space $\mathfrak{g}_\alpha$ is one-dimensional.

### Bracket Relations

For $\alpha, \beta \in \Phi$:
- $[\mathfrak{g}_\alpha, \mathfrak{g}_\beta] \subset \mathfrak{g}_{\alpha+\beta}$ if $\alpha + \beta \in \Phi$
- $[\mathfrak{g}_\alpha, \mathfrak{g}_\beta] = 0$ if $\alpha + \beta \neq 0$ and $\alpha + \beta \notin \Phi$
- $[\mathfrak{g}_\alpha, \mathfrak{g}_{-\alpha}] \subset \mathfrak{h}$

## Classification

> [!abstract] Classification Theorem (Cartan-Killing)
> Simple complex Lie algebras are classified by Dynkin diagrams:
>
> **Classical series**:
> | Type | Algebra | Description | Rank |
> |------|---------|-------------|------|
> | $A_n$ | $\mathfrak{sl}_{n+1}$ | Traceless matrices | $n \geq 1$ |
> | $B_n$ | $\mathfrak{so}_{2n+1}$ | Odd orthogonal | $n \geq 2$ |
> | $C_n$ | $\mathfrak{sp}_{2n}$ | Symplectic | $n \geq 3$ |
> | $D_n$ | $\mathfrak{so}_{2n}$ | Even orthogonal | $n \geq 4$ |
>
> **Exceptional**:
> $G_2$, $F_4$, $E_6$, $E_7$, $E_8$

## Examples

> [!example] Example 1: $\mathfrak{sl}_n(\mathbb{C})$
> - Simple for $n \geq 2$
> - Rank: $n - 1$
> - Dimension: $n^2 - 1$
> - Root system: $A_{n-1}$

> [!example] Example 2: $\mathfrak{so}_n(\mathbb{C})$
> - Simple for $n \geq 3$ (except $\mathfrak{so}_4 \cong \mathfrak{sl}_2 \oplus \mathfrak{sl}_2$)
> - $\mathfrak{so}_{2n+1}$: type $B_n$
> - $\mathfrak{so}_{2n}$: type $D_n$

> [!example] Example 3: $\mathfrak{sp}_{2n}(\mathbb{C})$
> - Simple for $n \geq 1$ (note: $\mathfrak{sp}_2 \cong \mathfrak{sl}_2$)
> - Rank: $n$
> - Dimension: $n(2n+1)$

## Complete Reducibility

> [!abstract] Weyl's Theorem
> Every finite-dimensional representation of a semisimple Lie algebra over $\mathbb{C}$ is completely reducible.
>
> That is, every representation decomposes as a direct sum of irreducible representations.

This is the analogue of Maschke's theorem for Lie algebras.

## Representation Theory

### Highest Weight Classification

> [!abstract] Theorem
> Finite-dimensional irreducible representations of a semisimple Lie algebra are classified by **dominant integral weights**.
>
> A weight $\lambda \in \mathfrak{h}^*$ is:
> - **Integral**: $\langle \lambda, \alpha^\vee \rangle \in \mathbb{Z}$ for all simple roots $\alpha$
> - **Dominant**: $\langle \lambda, \alpha^\vee \rangle \geq 0$ for all simple roots $\alpha$

For each dominant integral weight $\lambda$, there is a unique irreducible representation $L(\lambda)$.

### Weyl Character Formula

> [!abstract] Theorem
> The character of $L(\lambda)$ is:
> $$\text{ch}(L(\lambda)) = \frac{\sum_{w \in W} (-1)^{\ell(w)} e^{w(\lambda + \rho)}}{\sum_{w \in W} (-1)^{\ell(w)} e^{w(\rho)}}$$
>
> where $\rho = \frac{1}{2}\sum_{\alpha \in \Phi^+} \alpha$.

### Weyl Dimension Formula

$$\dim L(\lambda) = \prod_{\alpha \in \Phi^+} \frac{\langle \lambda + \rho, \alpha \rangle}{\langle \rho, \alpha \rangle}$$

## Universal Enveloping Algebra

> [!info] Definition
> The **universal enveloping algebra** $U(\mathfrak{g})$ is the associative algebra:
> $$U(\mathfrak{g}) = T(\mathfrak{g}) / \langle X \otimes Y - Y \otimes X - [X, Y] \rangle$$

Representations of $\mathfrak{g}$ $\longleftrightarrow$ $U(\mathfrak{g})$-modules.

### Casimir Element

For semisimple $\mathfrak{g}$, the **Casimir element** $\Omega \in Z(U(\mathfrak{g}))$ acts by a scalar on each irreducible representation.

## Levi Decomposition

> [!abstract] Theorem (Levi)
> Every finite-dimensional Lie algebra $\mathfrak{g}$ decomposes as:
> $$\mathfrak{g} = \text{rad}(\mathfrak{g}) \rtimes \mathfrak{s}$$
>
> where $\mathfrak{s}$ is a semisimple subalgebra (the **Levi factor**).

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/Root Systems|Root Systems]]
- [[06 - Representation Theory/Concepts/Weights and Weight Spaces|Weights and Weight Spaces]]
- [[06 - Representation Theory/Concepts/sl2 Representations|sl₂ Representations]]
- [[06 - Representation Theory/Concepts/Representations of Lie Algebras|Representations of Lie Algebras]]
