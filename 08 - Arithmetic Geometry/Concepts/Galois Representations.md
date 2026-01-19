---
title: Galois Representations
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - galois-theory
created: 2026-01-19
---

# Galois Representations

## Definition

> [!info] Definition (Galois Representation)
> A **Galois representation** is a continuous homomorphism:
> $$\rho: G_K \to \text{GL}_n(F)$$
> where $G_K = \text{Gal}(\bar{K}/K)$ is the absolute Galois group and $F$ is a topological field (usually $\mathbb{C}$, $\mathbb{Q}_\ell$, or $\overline{\mathbb{F}}_\ell$).

## Types of Representations

| Field $F$ | Name | Source |
|-----------|------|--------|
| $\mathbb{C}$ | Artin representation | Finite Galois extensions |
| $\mathbb{Q}_\ell$ | $\ell$-adic representation | Étale cohomology, Tate modules |
| $\overline{\mathbb{F}}_\ell$ | mod $\ell$ representation | Reduction of $\ell$-adic |

## From Elliptic Curves

> [!info] Definition (Tate Module)
> For an elliptic curve $E/K$:
> $$T_\ell(E) = \varprojlim_n E[\ell^n](\bar{K}) \cong \mathbb{Z}_\ell^2$$
>
> This gives a 2-dimensional $\ell$-adic representation:
> $$\rho_{E,\ell}: G_K \to \text{GL}_2(\mathbb{Z}_\ell) \hookrightarrow \text{GL}_2(\mathbb{Q}_\ell)$$

## Key Properties

> [!info] Definition (Unramified)
> $\rho$ is **unramified** at a prime $\mathfrak{p}$ if the inertia group $I_\mathfrak{p}$ acts trivially.

> [!info] Definition (Frobenius)
> For $\rho$ unramified at $\mathfrak{p}$, the **Frobenius** $\text{Frob}_\mathfrak{p}$ is the well-defined conjugacy class in the image.

## Arithmetic Information

For $E/\mathbb{Q}$ and $\rho_{E,\ell}$:
- $\rho_{E,\ell}$ is unramified at $p$ iff $E$ has good reduction at $p$
- $\text{tr}(\text{Frob}_p) = a_p = p + 1 - \#E(\mathbb{F}_p)$
- $\det(\text{Frob}_p) = p$

## Modularity

> [!abstract] Theorem (Modularity)
> For $E/\mathbb{Q}$, the representation $\rho_{E,\ell}$ is **modular**: it arises from a weight 2 newform $f \in S_2(\Gamma_0(N))$.

This means $\text{tr}(\rho_{E,\ell}(\text{Frob}_p)) = a_p(f)$ for $p \nmid N\ell$.

## From Étale Cohomology

> [!info] Theorem
> For smooth proper $X/K$:
> $$H^i(X_{\bar{K}}, \mathbb{Q}_\ell)$$
> is an $\ell$-adic Galois representation.

Examples:
- $H^1(E) \cong T_\ell(E) \otimes \mathbb{Q}_\ell$ (dual Tate module)
- $H^1(\text{curve of genus } g) \cong \mathbb{Q}_\ell^{2g}$

## Serre's Conjecture

> [!abstract] Theorem (Khare-Wintenberger, 2008)
> Every odd, irreducible 2-dimensional mod $\ell$ representation:
> $$\bar{\rho}: G_\mathbb{Q} \to \text{GL}_2(\overline{\mathbb{F}}_\ell)$$
> is modular (arises from a modular form).

## Langlands Program

> [!tip] Big Picture
> The **Langlands program** conjectures deep connections between:
> - Galois representations
> - Automorphic forms
> - L-functions
>
> Modularity of elliptic curves is a special case!

## Examples

> [!example] Example 1: Cyclotomic character
> $\chi_\ell: G_\mathbb{Q} \to \mathbb{Z}_\ell^*$ defined by action on $\mu_{\ell^\infty}$.
> $\chi_\ell(\text{Frob}_p) = p$ for $p \neq \ell$.

> [!example] Example 2: Artin representation
> $\rho: \text{Gal}(\mathbb{Q}(\zeta_n)/\mathbb{Q}) \to \text{GL}_1(\mathbb{C}) = \mathbb{C}^*$
> Dirichlet characters are 1-dimensional Artin representations.

> [!example] Example 3: Elliptic curve
> $E: y^2 = x^3 - x$ gives a 2-dimensional representation factoring through $\text{Gal}(\mathbb{Q}(i)/\mathbb{Q})$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Etale Cohomology|Étale Cohomology]]
- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves]]
- [[07 - Modular Forms/Concepts/Elliptic Curves and Modularity|Modularity Theorem]]
- [[05 - Galois Theory/Galois Theory Hub|Galois Theory]]
- [[08 - Arithmetic Geometry/Concepts/Zeta Functions of Varieties|Zeta Functions]]
