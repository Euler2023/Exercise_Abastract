---
title: Weights and Weight Spaces
topic: representation-theory
tags:
  - concept
  - definition
  - representation-theory
  - lie-theory
created: 2026-01-19
---

# Weights and Weight Spaces

## Basic Definitions

> [!info] Definition (Weight)
> Let $\mathfrak{g}$ be a semisimple Lie algebra with Cartan subalgebra $\mathfrak{h}$.
>
> For a representation $V$ of $\mathfrak{g}$, a **weight** is a linear functional $\lambda \in \mathfrak{h}^*$ such that:
> $$V_\lambda = \{v \in V : H \cdot v = \lambda(H)v \text{ for all } H \in \mathfrak{h}\} \neq 0$$
>
> $V_\lambda$ is called the **weight space** for $\lambda$.

The set of all weights of $V$ is denoted $\Pi(V)$ or $\text{wt}(V)$.

## Weight Space Decomposition

> [!abstract] Theorem
> Every finite-dimensional representation $V$ of a semisimple Lie algebra decomposes as:
> $$V = \bigoplus_{\lambda \in \mathfrak{h}^*} V_\lambda$$
>
> This is called the **weight space decomposition**.

The dimension $\dim V_\lambda$ is called the **multiplicity** of $\lambda$ in $V$.

## Examples

> [!example] Example 1: $\mathfrak{sl}_2$ representations
> For the irreducible $V_n$ of $\mathfrak{sl}_2$:
> - Weights: $n-1, n-3, n-5, \ldots, -(n-3), -(n-1)$
> - Each weight has multiplicity 1
> - Weight spaces are 1-dimensional

> [!example] Example 2: Adjoint Representation
> For the adjoint representation of $\mathfrak{g}$:
> - Weights = roots $\Phi$ plus zero
> - Root spaces $\mathfrak{g}_\alpha$ are 1-dimensional
> - $\mathfrak{h}$ is the zero weight space

> [!example] Example 3: Standard Representation of $\mathfrak{sl}_n$
> $\mathfrak{sl}_n$ acts on $\mathbb{C}^n$.
> - Weights: $\varepsilon_1, \varepsilon_2, \ldots, \varepsilon_n$ (coordinate functionals)
> - Each standard basis vector $e_i$ has weight $\varepsilon_i$
> - Multiplicities all equal 1

## Properties

> [!abstract] Key Properties
> 1. **Root action**: If $\alpha \in \Phi$ and $X_\alpha \in \mathfrak{g}_\alpha$, then:
>    $$X_\alpha: V_\lambda \to V_{\lambda + \alpha}$$
>    (Root vectors shift weights)
>
> 2. **Integrality**: For finite-dimensional representations:
>    $$\langle \lambda, \alpha^\vee \rangle \in \mathbb{Z} \quad \text{for all } \lambda \in \Pi(V), \alpha \in \Phi$$
>
> 3. **Weyl group symmetry**: $\Pi(V)$ is invariant under the Weyl group $W$.

## Weight Lattice

> [!info] Definition
> The **weight lattice** is:
> $$P = \{\lambda \in \mathfrak{h}^* : \langle \lambda, \alpha^\vee \rangle \in \mathbb{Z} \text{ for all } \alpha \in \Phi\}$$
>
> The **root lattice** is:
> $$Q = \mathbb{Z}\Phi = \sum_{\alpha \in \Delta} \mathbb{Z}\alpha$$

We have $Q \subset P$.

### Fundamental Weights

> [!info] Definition
> The **fundamental weights** $\omega_1, \ldots, \omega_n$ are defined by:
> $$\langle \omega_i, \alpha_j^\vee \rangle = \delta_{ij}$$
>
> They form a $\mathbb{Z}$-basis of $P$.

Every weight is a $\mathbb{Z}$-linear combination of fundamental weights.

## Dominant Weights

> [!info] Definition
> A weight $\lambda \in P$ is **dominant** if:
> $$\langle \lambda, \alpha^\vee \rangle \geq 0 \quad \text{for all simple roots } \alpha$$
>
> Equivalently: $\lambda = \sum_{i} n_i \omega_i$ with $n_i \geq 0$.

The set of dominant integral weights is $P^+ = P \cap \overline{C}$ where $C$ is the dominant Weyl chamber.

## Highest Weight

> [!info] Definition
> A weight $\lambda$ in $\Pi(V)$ is a **highest weight** if:
> - $\lambda + \alpha \notin \Pi(V)$ for all positive roots $\alpha$
>
> Equivalently: the corresponding weight space contains a vector killed by all positive root vectors.

> [!abstract] Theorem
> In a finite-dimensional irreducible representation:
> 1. There is a unique highest weight $\lambda$
> 2. $\lambda$ is dominant
> 3. $\dim V_\lambda = 1$
> 4. The representation is determined by $\lambda$

## Classification of Irreducibles

> [!abstract] Theorem (Highest Weight Classification)
> There is a bijection:
> $$\{\text{dominant integral weights}\} \longleftrightarrow \{\text{finite-dim irreducibles of } \mathfrak{g}\}$$
> $$\lambda \longmapsto L(\lambda)$$

### Weyl Dimension Formula

$$\dim L(\lambda) = \prod_{\alpha \in \Phi^+} \frac{\langle \lambda + \rho, \alpha \rangle}{\langle \rho, \alpha \rangle}$$

where $\rho = \frac{1}{2}\sum_{\alpha \in \Phi^+} \alpha = \sum_i \omega_i$.

## Weight Diagrams

For low-rank algebras, we can visualize weights in $\mathfrak{h}^*_\mathbb{R}$.

> [!example] $\mathfrak{sl}_2$ weight diagram for $V_5$
> Weights: $4, 2, 0, -2, -4$ (all multiplicity 1)
> ```
> •----•----•----•----•
> -4   -2   0    2    4
> ```

> [!example] $\mathfrak{sl}_3$ weight diagram for adjoint
> The 8 weights form a hexagon with one point at center (multiplicity 2).

## Multiplicity

> [!info] Computing Multiplicities
> The multiplicity of a weight can be computed using:
> 1. **Freudenthal's formula**: Recursive formula
> 2. **Kostant's partition function**: Counts ways to write $\lambda_0 - \lambda$ as sum of positive roots
> 3. **Weyl character formula**: Extract coefficients

> [!abstract] Freudenthal's Formula
> For $\mu \in \Pi(L(\lambda))$ with $\mu \neq \lambda$:
> $$(\|\lambda + \rho\|^2 - \|\mu + \rho\|^2) \dim L(\lambda)_\mu = 2\sum_{\alpha \in \Phi^+} \sum_{j \geq 1} (\mu + j\alpha, \alpha) \dim L(\lambda)_{\mu + j\alpha}$$

## Characters

> [!info] Definition
> The **character** of $V$ is:
> $$\text{ch}(V) = \sum_{\lambda \in P} (\dim V_\lambda) e^\lambda$$
>
> This is a formal sum in the group ring $\mathbb{Z}[P]$.

Properties:
- $\text{ch}(V \oplus W) = \text{ch}(V) + \text{ch}(W)$
- $\text{ch}(V \otimes W) = \text{ch}(V) \cdot \text{ch}(W)$
- $\text{ch}(V^*) = \text{ch}(V)^*$ (apply $\lambda \mapsto -\lambda$)

> [!abstract] Weyl Character Formula
> $$\text{ch}(L(\lambda)) = \frac{\sum_{w \in W} (-1)^{\ell(w)} e^{w(\lambda + \rho)}}{\prod_{\alpha \in \Phi^+}(e^{\alpha/2} - e^{-\alpha/2})}$$

## Tensor Product Decomposition

> [!info] Problem
> Given $L(\lambda)$ and $L(\mu)$, decompose $L(\lambda) \otimes L(\mu)$ into irreducibles.

Weights of tensor product: $\Pi(V \otimes W) = \Pi(V) + \Pi(W)$ (with multiplicities multiplied).

> [!abstract] Methods
> 1. **Character multiplication**: Multiply characters and decompose
> 2. **Littlewood-Richardson rule** (for $\mathfrak{sl}_n$)
> 3. **Klimyk's formula**: Express in terms of Weyl group action
> 4. **PRV conjecture** (now theorem): Constraints on components

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/Root Systems|Root Systems]]
- [[06 - Representation Theory/Concepts/sl2 Representations|sl₂ Representations]]
- [[06 - Representation Theory/Concepts/Semisimple Lie Algebras|Semisimple Lie Algebras]]
- [[06 - Representation Theory/Concepts/Representations of Lie Algebras|Representations of Lie Algebras]]
