---
title: Curves over Number Fields
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
created: 2026-01-19
---

# Curves over Number Fields

## Definition

> [!info] Definition
> A **curve over a number field** $K$ is a smooth projective variety $C/K$ of dimension 1.

The **genus** $g = g(C)$ is the key invariant determining the arithmetic behavior.

## Classification by Genus

| Genus | Curve Type | $C(K)$ | Example |
|-------|------------|--------|---------|
| $g = 0$ | Conic | Empty, one point, or $\cong \mathbb{P}^1$ | $x^2 + y^2 = z^2$ |
| $g = 1$ | Elliptic (with point) | Finitely generated group | $y^2 = x^3 - x$ |
| $g \geq 2$ | Higher genus | **Finite** (Faltings) | $y^2 = x^5 - x$ |

## Genus 0 Curves

> [!abstract] Theorem (Hasse-Minkowski for Conics)
> A smooth conic $C/K$ has a $K$-rational point if and only if $C(K_v) \neq \emptyset$ for all places $v$ of $K$.

If $C(\mathbb{Q}) \neq \emptyset$, then $C \cong \mathbb{P}^1$ and $C(\mathbb{Q})$ is infinite.

## Genus 1 Curves

### With a Rational Point (Elliptic Curves)

A genus 1 curve with a rational point is an **elliptic curve**.

> [!abstract] Mordell-Weil Theorem
> $E(K) \cong \mathbb{Z}^r \oplus E(K)_{\text{tors}}$

### Without a Rational Point

A genus 1 curve without a rational point is a **torsor** (principal homogeneous space) for its Jacobian.

> [!info] Definition (Selmer Group)
> The $n$-Selmer group measures failures of the Hasse principle for $n$-coverings:
> $$\text{Sel}_n(E/K) = \ker\left(H^1(K, E[n]) \to \prod_v H^1(K_v, E)\right)$$

## Genus $\geq 2$ Curves

> [!abstract] Faltings' Theorem (Mordell Conjecture)
> For a curve $C/K$ of genus $g \geq 2$:
> $$\#C(K) < \infty$$

### Methods to Determine $C(K)$

| Method | Applies When | Effective? |
|--------|--------------|------------|
| Chabauty-Coleman | $\text{rank } J(K) < g$ | Yes |
| Mordell-Weil sieve | Combined with descent | Sometimes |
| Kim's method | Non-abelian Chabauty | Developing |
| Faltings' proof | Always | No |

## The Jacobian

> [!info] Definition
> The **Jacobian** $J = J(C)$ is an abelian variety of dimension $g$ satisfying:
> $$J(K) = \text{Pic}^0(C)(K)$$

### Abel-Jacobi Map

Fixing a basepoint $P_0 \in C(K)$:
$$\iota: C \hookrightarrow J, \quad P \mapsto [P - P_0]$$

This embeds $C$ into its Jacobian (if $C(K) \neq \emptyset$).

## Important Examples

> [!example] Example 1: Fermat Curves
> $C_n: x^n + y^n = z^n$ has genus $g = \frac{(n-1)(n-2)}{2}$.
>
> | $n$ | Genus | $C_n(\mathbb{Q})$ |
> |-----|-------|-------------------|
> | 3 | 1 | Elliptic curve, finitely many |
> | 4 | 3 | Finite (Fermat proved) |
> | $\geq 5$ | $\geq 6$ | Only trivial (FLT) |

> [!example] Example 2: Hyperelliptic Curves
> $C: y^2 = f(x)$ with $\deg f = 2g + 1$ or $2g + 2$ (squarefree).
> - Genus: $g$
> - Jacobian: computable via Mumford representation

> [!example] Example 3: Modular Curves
> $X_0(N)$ parametrizes elliptic curves with cyclic $N$-isogeny.
> - Genus grows with $N$
> - Rational points related to isogenies defined over $\mathbb{Q}$
> - Mazur's theorem: $X_0(N)(\mathbb{Q}) = \{\text{cusps}\}$ for $N$ prime $> 163$

## Arithmetic Invariants

### L-function

$$L(C, s) = L(J(C), s) = \prod_p L_p(C, s)^{-1}$$

where $L_p(C, s) = \det(1 - \text{Frob}_p \cdot p^{-s} | H^1_{\text{ét}})$.

### Conductor

The **conductor** $N$ encodes bad reduction primes with multiplicities.

### Regulator

For $J(K)$ of rank $r$, the **regulator** is:
$$\text{Reg}_{J/K} = \det(\langle P_i, P_j \rangle)$$
where $\{P_1, \ldots, P_r\}$ is a basis for $J(K)/J(K)_{\text{tors}}$ and $\langle \cdot, \cdot \rangle$ is the canonical height pairing.

## Models and Reduction

> [!info] Definition (Good Reduction)
> $C$ has **good reduction** at $v$ if there exists a smooth model over $\mathcal{O}_v$.

| Reduction Type | Description |
|----------------|-------------|
| Good | Smooth special fiber |
| Semistable | Nodal singularities only |
| Bad | Other singularities |

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Abelian Varieties|Abelian Varieties]]
- [[08 - Arithmetic Geometry/Concepts/Faltings Theorem|Faltings' Theorem]]
- [[08 - Arithmetic Geometry/Concepts/Rational Points|Rational Points]]
- [[08 - Arithmetic Geometry/Concepts/Heights|Heights]]
