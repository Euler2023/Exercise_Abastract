---
title: Abelian Varieties
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - algebraic-geometry
created: 2026-01-19
---

# Abelian Varieties

## Definition

> [!info] Definition (Abelian Variety)
> An **abelian variety** over a field $k$ is a complete algebraic variety $A$ with a group structure given by morphisms:
> - Multiplication: $m: A \times A \to A$
> - Inverse: $i: A \to A$
> - Identity: $e: \text{Spec}(k) \to A$
>
> satisfying the group axioms.

> [!tip] Key Fact
> Completeness + group structure $\Rightarrow$ the group law is **commutative**!

## Basic Properties

### Dimension and Structure

| Dimension | Name | Description |
|-----------|------|-------------|
| 1 | Elliptic curve | Genus 1 curve with marked point |
| 2 | Abelian surface | e.g., product of elliptic curves, Jacobian of genus 2 curve |
| $g$ | Abelian variety | Higher-dimensional generalizations |

### Analytic Description (over $\mathbb{C}$)

> [!abstract] Theorem
> Every abelian variety over $\mathbb{C}$ is isomorphic to:
> $$A(\mathbb{C}) \cong \mathbb{C}^g / \Lambda$$
> where $\Lambda \cong \mathbb{Z}^{2g}$ is a lattice satisfying the **Riemann conditions**.

## Mordell-Weil for Abelian Varieties

> [!abstract] Theorem (Mordell-Weil, General)
> For an abelian variety $A$ over a number field $K$:
> $$A(K) \cong \mathbb{Z}^r \oplus A(K)_{\text{tors}}$$
> where $r \geq 0$ is the **rank** and the torsion subgroup is finite.

## Important Constructions

### Jacobian Variety

> [!info] Definition
> For a smooth projective curve $C$ of genus $g$, the **Jacobian** $J(C)$ is the abelian variety of dimension $g$ satisfying:
> $$J(C) = \text{Pic}^0(C) = \frac{\text{degree 0 divisors}}{\text{principal divisors}}$$

The curve $C$ embeds into $J(C)$ via $P \mapsto [P - P_0]$ for a basepoint $P_0$.

### Dual Abelian Variety

> [!info] Definition
> The **dual abelian variety** $A^\vee = \text{Pic}^0(A)$ parametrizes degree 0 line bundles on $A$.

There is a canonical isomorphism $(A^\vee)^\vee \cong A$.

### Isogenies

> [!info] Definition
> An **isogeny** $\phi: A \to B$ is a surjective morphism of abelian varieties with finite kernel.

| Property | Description |
|----------|-------------|
| Degree | $\deg(\phi) = \#\ker(\phi)$ |
| Dual isogeny | $\phi^\vee: B^\vee \to A^\vee$ with $\deg(\phi) = \deg(\phi^\vee)$ |
| Multiplication | $[n]: A \to A$ is an isogeny of degree $n^{2g}$ |

## Torsion Points

> [!info] Definition
> The $n$-torsion is:
> $$A[n] = \ker([n]: A \to A)$$

> [!abstract] Theorem
> Over $\bar{k}$ (characteristic 0 or coprime to $n$):
> $$A[n] \cong (\mathbb{Z}/n\mathbb{Z})^{2g}$$

## Polarizations

> [!info] Definition
> A **polarization** on $A$ is an isogeny $\lambda: A \to A^\vee$ induced by an ample line bundle.
> - **Principal polarization**: $\lambda$ is an isomorphism

Jacobians of curves have canonical principal polarizations (Theta divisor).

## Endomorphism Ring

$$\text{End}(A) = \{\text{morphisms } \phi: A \to A\}$$

| Type | $\text{End}(A) \otimes \mathbb{Q}$ | Example |
|------|-----------------------------------|---------|
| Generic | $\mathbb{Q}$ | Most abelian varieties |
| Real multiplication | Totally real field | Certain modular abelian varieties |
| Complex multiplication | CM field | $E$ with $j$-invariant algebraic |
| Quaternionic | Quaternion algebra | Supersingular elliptic curves |

## L-functions and BSD

For $A/\mathbb{Q}$ an abelian variety of dimension $g$:

$$L(A, s) = \prod_p L_p(A, s)^{-1}$$

> [!abstract] BSD Conjecture (for Abelian Varieties)
> $$\text{rank}(A(\mathbb{Q})) = \text{ord}_{s=1} L(A, s)$$

## Examples

> [!example] Example 1: Product of Elliptic Curves
> $A = E_1 \times E_2$ is an abelian surface.
> - $A[n] \cong E_1[n] \times E_2[n] \cong (\mathbb{Z}/n\mathbb{Z})^4$
> - $\text{End}(A) \supseteq \text{End}(E_1) \times \text{End}(E_2)$

> [!example] Example 2: Jacobian of Hyperelliptic Curve
> $C: y^2 = f(x)$ with $\deg f = 2g + 1$ has Jacobian $J(C)$ of dimension $g$.

> [!example] Example 3: Weil Restriction
> For $E/K$ with $[K:\mathbb{Q}] = d$, the Weil restriction $\text{Res}_{K/\mathbb{Q}}(E)$ is an abelian variety over $\mathbb{Q}$ of dimension $d$.

## Néron Models

> [!info] Definition
> For $A/K$ (number field), the **Néron model** $\mathcal{A}/\mathcal{O}_K$ is a smooth group scheme extending $A$ with the **Néron mapping property**:
> For any smooth $S$-scheme $Y$:
> $$\text{Hom}_S(Y, \mathcal{A}) \cong \text{Hom}_K(Y_K, A)$$

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Mordell-Weil Theorem|Mordell-Weil Theorem]]
- [[08 - Arithmetic Geometry/Concepts/Curves over Number Fields|Curves over Number Fields]]
- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]
- [[08 - Arithmetic Geometry/Concepts/BSD Conjecture|BSD Conjecture]]
