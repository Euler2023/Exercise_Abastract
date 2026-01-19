---
title: Representations of Lie Algebras
topic: representation-theory
tags:
  - concept
  - definition
  - representation-theory
  - lie-theory
created: 2026-01-19
---

# Representations of Lie Algebras

## Definition

> [!info] Definition (Representation)
> A **representation** of a Lie algebra $\mathfrak{g}$ on a vector space $V$ is a Lie algebra homomorphism:
> $$\rho: \mathfrak{g} \to \mathfrak{gl}(V)$$
>
> That is, $\rho$ is linear and satisfies:
> $$\rho([X, Y]) = \rho(X)\rho(Y) - \rho(Y)\rho(X) = [\rho(X), \rho(Y)]$$

We often write $X \cdot v$ or $Xv$ instead of $\rho(X)(v)$.

> [!info] Alternative Definition ($\mathfrak{g}$-module)
> A **$\mathfrak{g}$-module** is a vector space $V$ with a bilinear action $\mathfrak{g} \times V \to V$ satisfying:
> $$[X, Y] \cdot v = X \cdot (Y \cdot v) - Y \cdot (X \cdot v)$$

These two definitions are equivalent.

## Basic Examples

> [!example] Example 1: Trivial Representation
> $\rho(X) = 0$ for all $X \in \mathfrak{g}$.

> [!example] Example 2: Adjoint Representation
> $\mathfrak{g}$ acts on itself via $\text{ad}_X(Y) = [X, Y]$.
> Dimension: $\dim \mathfrak{g}$.

> [!example] Example 3: Standard Representation of $\mathfrak{gl}_n$
> $\mathfrak{gl}_n$ acts on $\mathbb{C}^n$ by matrix multiplication.

> [!example] Example 4: Representations of $\mathfrak{sl}_2$
> For each $n \geq 1$, there is a unique irreducible representation $V_n$ of dimension $n$.
> See [[06 - Representation Theory/Concepts/sl2 Representations|sl₂ Representations]].

## Morphisms and Subrepresentations

> [!info] Definition (Morphism)
> A **morphism** (or $\mathfrak{g}$-homomorphism) $\phi: V \to W$ between representations is a linear map satisfying:
> $$\phi(X \cdot v) = X \cdot \phi(v)$$
>
> Equivalently: $\phi \circ \rho_V(X) = \rho_W(X) \circ \phi$ for all $X$.

> [!info] Definition (Subrepresentation)
> A **subrepresentation** (or $\mathfrak{g}$-submodule) is a subspace $W \subset V$ with $\mathfrak{g} \cdot W \subset W$.

## Irreducibility and Complete Reducibility

> [!info] Definition
> - A representation is **irreducible** (or simple) if it has no proper subrepresentations.
> - A representation is **completely reducible** (or semisimple) if it is a direct sum of irreducibles.

> [!abstract] Weyl's Theorem
> For semisimple Lie algebras over $\mathbb{C}$:
> Every finite-dimensional representation is completely reducible.

> [!abstract] Schur's Lemma
> If $V$, $W$ are irreducible and $\phi: V \to W$ is a morphism, then:
> - $\phi = 0$ or $\phi$ is an isomorphism
> - If $V = W$ and the field is algebraically closed, then $\phi = \lambda \cdot \text{id}$

## Constructing New Representations

### Direct Sum
If $V$ and $W$ are $\mathfrak{g}$-modules:
$$X \cdot (v, w) = (X \cdot v, X \cdot w)$$

### Tensor Product
$$X \cdot (v \otimes w) = (X \cdot v) \otimes w + v \otimes (X \cdot w)$$

> [!warning] Note
> This is the Leibniz rule! It comes from differentiating the group action.

### Dual Representation
For $V^* = \text{Hom}(V, \mathbb{C})$:
$$(X \cdot f)(v) = -f(X \cdot v)$$

The negative sign ensures this is a representation.

### Symmetric and Exterior Powers
- $\text{Sym}^k(V)$: symmetrized tensor products
- $\bigwedge^k V$: antisymmetrized tensor products

Both inherit $\mathfrak{g}$-module structure from $V^{\otimes k}$.

### Hom Space
For representations $V$ and $W$:
$$(X \cdot \phi)(v) = X \cdot \phi(v) - \phi(X \cdot v)$$

$\text{Hom}_\mathfrak{g}(V, W) = \{\phi : X \cdot \phi = 0\}$ is the space of morphisms.

## Weight Theory

> [!info] Definition (Weight)
> For a representation $V$ of $\mathfrak{g}$ with Cartan subalgebra $\mathfrak{h}$:
>
> A **weight** is $\lambda \in \mathfrak{h}^*$ such that:
> $$V_\lambda = \{v \in V : H \cdot v = \lambda(H)v \ \forall H \in \mathfrak{h}\} \neq 0$$
>
> $V_\lambda$ is the **weight space** for $\lambda$.

> [!abstract] Weight Space Decomposition
> For semisimple $\mathfrak{g}$:
> $$V = \bigoplus_{\lambda \in \mathfrak{h}^*} V_\lambda$$

See [[06 - Representation Theory/Concepts/Weights and Weight Spaces|Weights and Weight Spaces]] for details.

## Highest Weight Theory

> [!info] Definition
> A **highest weight vector** is $v \in V$ such that:
> 1. $H \cdot v = \lambda(H)v$ for all $H \in \mathfrak{h}$
> 2. $X_\alpha \cdot v = 0$ for all positive roots $\alpha$

> [!abstract] Theorem
> For semisimple $\mathfrak{g}$:
> 1. Every finite-dimensional irreducible has a unique highest weight vector (up to scalar)
> 2. The highest weight $\lambda$ determines the representation uniquely
> 3. $\lambda$ must be **dominant integral**

## Classification for Semisimple Algebras

> [!abstract] Main Theorem
> Finite-dimensional irreducible representations of a semisimple $\mathfrak{g}$ are parameterized by dominant integral weights:
> $$\{\lambda \in \mathfrak{h}^* : \langle \lambda, \alpha^\vee \rangle \in \mathbb{Z}_{\geq 0} \ \text{for all simple } \alpha\}$$

For each such $\lambda$, we have:
- A unique irreducible $L(\lambda)$
- Highest weight $\lambda$
- Dimension given by Weyl formula

## Verma Modules

> [!info] Definition
> The **Verma module** $M(\lambda)$ is the universal highest weight module:
> $$M(\lambda) = U(\mathfrak{g}) \otimes_{U(\mathfrak{b})} \mathbb{C}_\lambda$$
>
> where $\mathfrak{b} = \mathfrak{h} \oplus \mathfrak{n}^+$ is a Borel subalgebra.

Properties:
- $M(\lambda)$ is infinite-dimensional (unless $\lambda$ is dominant integral)
- Has unique maximal proper submodule
- Quotient is the irreducible $L(\lambda)$

## Character Theory

> [!info] Definition
> The **character** of a finite-dimensional representation is:
> $$\text{ch}(V) = \sum_{\lambda} (\dim V_\lambda) e^\lambda$$

Characters are additive on direct sums and multiplicative on tensor products.

> [!abstract] Weyl Character Formula
> $$\text{ch}(L(\lambda)) = \frac{\sum_{w \in W} (-1)^{\ell(w)} e^{w(\lambda + \rho)}}{\sum_{w \in W} (-1)^{\ell(w)} e^{w(\rho)}}$$

## Connection to Lie Groups

> [!abstract] Differentiation Functor
> If $G$ is a Lie group with Lie algebra $\mathfrak{g}$:
> - Every smooth $G$-representation gives a $\mathfrak{g}$-representation by differentiation
> - $\rho(\exp(X)) = e^{d\rho(X)}$

> [!abstract] Integration (Simply Connected Case)
> If $G$ is simply connected:
> Every $\mathfrak{g}$-representation integrates to a unique $G$-representation.

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]
- [[06 - Representation Theory/Concepts/sl2 Representations|sl₂ Representations]]
- [[06 - Representation Theory/Concepts/Weights and Weight Spaces|Weights and Weight Spaces]]
- [[06 - Representation Theory/Concepts/Semisimple Lie Algebras|Semisimple Lie Algebras]]
- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]
