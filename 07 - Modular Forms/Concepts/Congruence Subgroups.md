---
title: Congruence Subgroups
topic: modular-forms
tags:
  - concept
  - definition
  - modular-forms
  - group-theory
created: 2026-01-19
---

# Congruence Subgroups

## Definition

> [!info] Definition (Principal Congruence Subgroup)
> For a positive integer $N$, the **principal congruence subgroup** of level $N$ is:
> $$\Gamma(N) = \left\{ \begin{pmatrix} a & b \\ c & d \end{pmatrix} \in \text{SL}_2(\mathbb{Z}) : \begin{pmatrix} a & b \\ c & d \end{pmatrix} \equiv \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \pmod{N} \right\}$$

> [!info] Definition (Congruence Subgroup)
> A subgroup $\Gamma \subseteq \text{SL}_2(\mathbb{Z})$ is a **congruence subgroup** if $\Gamma(N) \subseteq \Gamma$ for some $N$.

## Important Congruence Subgroups

> [!info] Definition ($\Gamma_0(N)$)
> $$\Gamma_0(N) = \left\{ \begin{pmatrix} a & b \\ c & d \end{pmatrix} \in \text{SL}_2(\mathbb{Z}) : c \equiv 0 \pmod{N} \right\}$$

> [!info] Definition ($\Gamma_1(N)$)
> $$\Gamma_1(N) = \left\{ \begin{pmatrix} a & b \\ c & d \end{pmatrix} \in \text{SL}_2(\mathbb{Z}) : a \equiv d \equiv 1, \, c \equiv 0 \pmod{N} \right\}$$

## Containment Relations

$$\Gamma(N) \subseteq \Gamma_1(N) \subseteq \Gamma_0(N) \subseteq \text{SL}_2(\mathbb{Z})$$

## Index Formulas

> [!abstract] Theorem (Index in $\text{SL}_2(\mathbb{Z})$)
> $$[\text{SL}_2(\mathbb{Z}) : \Gamma(N)] = N^3 \prod_{p | N} \left(1 - \frac{1}{p^2}\right)$$
> $$[\text{SL}_2(\mathbb{Z}) : \Gamma_0(N)] = N \prod_{p | N} \left(1 + \frac{1}{p}\right)$$

## Cusps

> [!tip] Multiple Cusps
> Unlike $\text{SL}_2(\mathbb{Z})$ which has one cusp, congruence subgroups typically have multiple cusps.
>
> Number of cusps of $\Gamma_0(N)$ equals $\sum_{d | N} \phi(\gcd(d, N/d))$.

## Modular Forms for Congruence Subgroups

> [!info] Definition
> A modular form of weight $k$ for $\Gamma$ is $f: \mathbb{H} \to \mathbb{C}$ satisfying:
> 1. $f$ is holomorphic on $\mathbb{H}$
> 2. $f(\gamma \cdot \tau) = (c\tau + d)^k f(\tau)$ for all $\gamma \in \Gamma$
> 3. $f$ is holomorphic at all cusps of $\Gamma$

Notation: $M_k(\Gamma)$, $S_k(\Gamma)$ for spaces of forms and cusp forms.

## Examples

> [!example] Example 1: $\Gamma_0(4)$
> Has index 6 in $\text{SL}_2(\mathbb{Z})$ and 3 cusps.

> [!example] Example 2: $\Gamma(2)$
> $[\text{SL}_2(\mathbb{Z}) : \Gamma(2)] = 6$, related to the Legendre family of elliptic curves.

> [!example] Example 3: Modular curves
> $X_0(N) = \mathbb{H}^* / \Gamma_0(N)$ parametrizes elliptic curves with a cyclic $N$-isogeny.

## Hecke Congruence Groups

The groups $\Gamma_0(N)$ are also called **Hecke congruence groups** and are fundamental for:
- [[07 - Modular Forms/Concepts/Hecke Operators|Hecke theory]]
- [[07 - Modular Forms/Concepts/Elliptic Curves and Modularity|Modularity theorem]]

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Group|Modular Group]]
- [[07 - Modular Forms/Concepts/Fundamental Domain|Fundamental Domain]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
