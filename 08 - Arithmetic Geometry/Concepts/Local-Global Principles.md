---
title: Local-Global Principles
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
created: 2026-01-19
---

# Local-Global Principles

## The Hasse Principle

> [!info] Definition (Hasse Principle)
> A variety $X$ over $\mathbb{Q}$ satisfies the **Hasse principle** if:
> $$X(\mathbb{Q}) \neq \emptyset \iff X(\mathbb{R}) \neq \emptyset \text{ and } X(\mathbb{Q}_p) \neq \emptyset \text{ for all primes } p$$
>
> In words: a global solution exists iff local solutions exist everywhere.

## When It Works

> [!abstract] Hasse-Minkowski Theorem
> Quadratic forms over $\mathbb{Q}$ satisfy the Hasse principle.
>
> $Q(x_1, \ldots, x_n) = 0$ has a non-trivial solution in $\mathbb{Q}$ iff it has solutions in $\mathbb{R}$ and all $\mathbb{Q}_p$.

> [!example] Example: $x^2 + y^2 = 3$
> - $\mathbb{R}$: Yes (e.g., $(\sqrt{3}, 0)$)
> - $\mathbb{Q}_3$: Yes (by Hensel)
> - $\mathbb{Q}_2$: Need $x^2 + y^2 \equiv 3 \pmod 8$. But squares mod 8 are 0, 1, 4. So $x^2 + y^2 \in \{0, 1, 2, 4, 5\} \pmod 8$. No!
>
> Hasse principle correctly predicts: $x^2 + y^2 = 3$ has no rational solutions.

## When It Fails

> [!warning] The Hasse Principle Can Fail!
> For higher degree equations and higher genus curves, the Hasse principle often fails.

> [!example] Selmer's Example
> $3x^3 + 4y^3 + 5z^3 = 0$
>
> Has solutions in $\mathbb{R}$ and all $\mathbb{Q}_p$, but **no** rational solutions!

## Brauer-Manin Obstruction

> [!info] Definition (Brauer-Manin Obstruction)
> The **Brauer group** $\text{Br}(X)$ gives obstructions to the Hasse principle.
>
> Define:
> $$X(\mathbb{A})^{\text{Br}} = \{(x_v) \in \prod_v X(K_v) : \sum_v \text{inv}_v(A(x_v)) = 0 \text{ for all } A \in \text{Br}(X)\}$$
>
> Then: $X(K) \subseteq X(\mathbb{A})^{\text{Br}} \subseteq X(\mathbb{A})$

If $X(\mathbb{A})^{\text{Br}} = \emptyset$ but $X(\mathbb{A}) \neq \emptyset$, the Hasse principle fails with a "Brauer-Manin obstruction."

## Weak and Strong Approximation

> [!info] Definition (Weak Approximation)
> $X$ satisfies **weak approximation** if $X(K)$ is dense in $\prod_v X(K_v)$ (product topology).

> [!info] Definition (Strong Approximation)
> $X$ satisfies **strong approximation** (away from $S$) if $X(K)$ is dense in $\prod_{v \notin S} X(K_v)$.

> [!example] Example
> $\mathbb{G}_a = \mathbb{A}^1$ satisfies strong approximation: $\mathbb{Z}$ is dense in $\prod_p \mathbb{Z}_p$ (Chinese Remainder Theorem).

## Local Solubility

Checking local solubility:
- **$\mathbb{R}$**: Sign conditions, topology
- **$\mathbb{Q}_p$**: Hensel's lemma, local analysis

> [!tip] Hensel's Lemma
> If $f(a) \equiv 0 \pmod p$ and $f'(a) \not\equiv 0 \pmod p$, then $f$ has a root in $\mathbb{Z}_p$ lifting $a$.

## Examples of Failures

> [!example] Genus 1 curve without Hasse principle
> $2y^2 = 1 - 17x^4$
>
> Has local points everywhere but no global points (Lind, Reichardt).

> [!example] Châtelet surfaces
> $y^2 - az^2 = P(x)$ for specific $a$, $P$ can fail the Hasse principle.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Rational Points|Rational Points]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]
- [[08 - Arithmetic Geometry/Concepts/Diophantine Equations|Diophantine Equations]]
