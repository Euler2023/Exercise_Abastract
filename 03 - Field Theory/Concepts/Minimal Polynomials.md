---
title: Minimal Polynomials
topic: field-theory
tags:
  - concept
  - definition
  - field-theory
created: 2026-01-19
---

# Minimal Polynomials

## Definition

> [!info] Definition (Minimal Polynomial)
> Let $\alpha$ be algebraic over field $F$. The **minimal polynomial** of $\alpha$ over $F$, denoted $m_\alpha(x)$ or $\text{min}_F(\alpha)$, is the unique monic polynomial of smallest degree in $F[x]$ having $\alpha$ as a root.

## Characterizations

> [!tip] Equivalent Conditions
> For a monic polynomial $f(x) \in F[x]$ with $f(\alpha) = 0$:
>
> $f$ is the minimal polynomial of $\alpha$ over $F$ if and only if:
> 1. $f$ has minimal degree among all polynomials with $\alpha$ as root
> 2. $f$ is irreducible over $F$
> 3. $f$ divides every polynomial $g \in F[x]$ with $g(\alpha) = 0$

## Key Properties

1. The minimal polynomial exists and is unique
2. The minimal polynomial is irreducible over $F$
3. $\deg(m_\alpha) = [F(\alpha) : F]$
4. $F[x]/(m_\alpha) \cong F(\alpha)$
5. The roots of $m_\alpha$ are exactly the conjugates of $\alpha$ over $F$
6. $m_\alpha$ divides any polynomial vanishing at $\alpha$

## Examples

> [!example] Example 1: $\sqrt{2}$ over $\mathbb{Q}$
> The minimal polynomial is $x^2 - 2$:
> - Monic, has $\sqrt{2}$ as root
> - Irreducible by Eisenstein (or direct check)
> - Degree 2, so $[\mathbb{Q}(\sqrt{2}):\mathbb{Q}] = 2$

> [!example] Example 2: $i$ over $\mathbb{R}$
> The minimal polynomial is $x^2 + 1$:
> - Irreducible over $\mathbb{R}$ (no real roots)
> - $[\mathbb{C}:\mathbb{R}] = 2$

> [!example] Example 3: $\sqrt[3]{2}$ over $\mathbb{Q}$
> The minimal polynomial is $x^3 - 2$:
> - Irreducible by Eisenstein with $p = 2$
> - $[\mathbb{Q}(\sqrt[3]{2}):\mathbb{Q}] = 3$

> [!example] Example 4: Primitive $n$-th root of unity
> For $\zeta_n = e^{2\pi i/n}$, the minimal polynomial over $\mathbb{Q}$ is the $n$-th cyclotomic polynomial $\Phi_n(x)$.

> [!example] Example 5: $\sqrt{2} + \sqrt{3}$ over $\mathbb{Q}$
> The minimal polynomial is $x^4 - 10x^2 + 1$:
> - $\alpha = \sqrt{2} + \sqrt{3}$
> - $\alpha^2 = 5 + 2\sqrt{6}$
> - $(\alpha^2 - 5)^2 = 24$
> - $\alpha^4 - 10\alpha^2 + 1 = 0$

## Finding Minimal Polynomials

> [!tip] Strategy
> 1. Find a polynomial $f(\alpha) = 0$ by algebraic manipulation
> 2. Factor $f$ over $F$
> 3. The irreducible factor containing $\alpha$ as root is $m_\alpha$

## Theorems

> [!abstract] Degree Formula
> If $\alpha$ is algebraic over $F$, then:
> $$[F(\alpha):F] = \deg(m_\alpha)$$

> [!abstract] Basis Theorem
> If $m_\alpha$ has degree $n$, then $\{1, \alpha, \alpha^2, \ldots, \alpha^{n-1}\}$ is a basis for $F(\alpha)$ over $F$.

## Related Concepts

- [[03 - Field Theory/Concepts/Algebraic and Transcendental Elements|Algebraic and Transcendental Elements]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
