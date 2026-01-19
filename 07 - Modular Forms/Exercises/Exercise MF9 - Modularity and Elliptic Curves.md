---
title: "Exercise MF9: Modularity and Elliptic Curves"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Diamond & Shurman, A First Course in Modular Forms"
created: 2026-01-19
---

# Exercise MF9: Modularity and Elliptic Curves

## Problem Statement

> [!question] Problem
> The Modularity Theorem states that every elliptic curve $E/\mathbb{Q}$ of conductor $N$ corresponds to a weight 2 newform $f \in S_2(\Gamma_0(N))$ such that $L(E, s) = L(f, s)$.
>
> **(a)** For the elliptic curve $E: y^2 + y = x^3 - x^2$ (conductor $N = 11$), we have:
> $$\#E(\mathbb{F}_p) = p + 1 - a_p$$
> Compute $a_2, a_3, a_5, a_7$ by counting points on $E$ over $\mathbb{F}_2, \mathbb{F}_3, \mathbb{F}_5, \mathbb{F}_7$.
>
> **(b)** The space $S_2(\Gamma_0(11))$ is 1-dimensional. Write down the first few terms of the unique normalized newform $f(\tau) = \sum a_n q^n$ and verify your answers from (a).
>
> **(c)** Explain how the Modularity Theorem, combined with Ribet's theorem, implies Fermat's Last Theorem.
>
> **(d)** What is the relationship between the conductor of $E$ and the level of $f$?

## Hints

> [!hint]- Hint 1
> For part (a), to count $\#E(\mathbb{F}_p)$, list all $(x, y) \in \mathbb{F}_p^2$ satisfying $y^2 + y = x^3 - x^2$, plus the point at infinity.

> [!hint]- Hint 2
> For part (b), look up tables of modular forms (e.g., LMFDB) or use the fact that $S_2(\Gamma_0(11))$ is spanned by the eta quotient $\eta(\tau)^2 \eta(11\tau)^2$.

> [!hint]- Hint 3
> For part (c), the key is the Frey curve $y^2 = x(x - a^p)(x + b^p)$ and Ribet's level-lowering theorem.

## Solution

> [!success]- Solution
> **(a)** Counting points on $E: y^2 + y = x^3 - x^2$ over finite fields:
>
> **Over $\mathbb{F}_2$:**
> - $x = 0$: $y^2 + y = 0 \Rightarrow y(y+1) = 0 \Rightarrow y = 0, 1$. Points: $(0,0), (0,1)$
> - $x = 1$: $y^2 + y = 0 \Rightarrow y = 0, 1$. Points: $(1,0), (1,1)$
> - Plus point at infinity
> - $\#E(\mathbb{F}_2) = 5$, so $a_2 = 2 + 1 - 5 = \boxed{-2}$
>
> **Over $\mathbb{F}_3$:**
> - Check each $x \in \{0, 1, 2\}$ and solve $y^2 + y = x^3 - x^2$
> - After enumeration: $\#E(\mathbb{F}_3) = 5$, so $a_3 = 3 + 1 - 5 = \boxed{-1}$
>
> **Over $\mathbb{F}_5$:**
> - $\#E(\mathbb{F}_5) = 5$, so $a_5 = 5 + 1 - 5 = \boxed{1}$
>
> **Over $\mathbb{F}_7$:**
> - $\#E(\mathbb{F}_7) = 10$, so $a_7 = 7 + 1 - 10 = \boxed{-2}$
>
> **(b)** The newform $f \in S_2(\Gamma_0(11))$:
>
> Using $f = \eta(\tau)^2 \eta(11\tau)^2 = q \prod_{n=1}^{\infty}(1-q^n)^2(1-q^{11n})^2$:
>
> $$f = q - 2q^2 - q^3 + 2q^4 + q^5 + 2q^6 - 2q^7 + \cdots$$
>
> This matches: $a_2 = -2$, $a_3 = -1$, $a_5 = 1$, $a_7 = -2$ ✓
>
> **(c)** Proof of Fermat's Last Theorem:
>
> 1. Assume $a^p + b^p = c^p$ for $p > 2$ prime, with $\gcd(a,b,c) = 1$
> 2. Construct the **Frey curve**: $E: y^2 = x(x - a^p)(x + b^p)$
> 3. This curve has conductor $N = \text{rad}(abc)^2$ (roughly)
> 4. By Modularity (Wiles), $E$ corresponds to some $f \in S_2(\Gamma_0(N))$
> 5. **Ribet's Theorem**: The mod $p$ Galois representation $\bar{\rho}_{E,p}$ arises from a form of level $N_0 = 2$ (level lowering)
> 6. But $S_2(\Gamma_0(2)) = 0$ (no cusp forms of weight 2 and level 2)
> 7. **Contradiction!** So no such $a, b, c$ exist.
>
> **(d)** Conductor-Level relationship:
>
> The conductor $N$ of $E$ equals the level of the corresponding newform $f$.
>
> More precisely: $E$ is modular of level $N$ means there exists a newform $f \in S_2(\Gamma_0(N))^{\text{new}}$ with $L(E, s) = L(f, s)$.

## Related Concepts

- [[07 - Modular Forms/Concepts/Elliptic Curves and Modularity|Elliptic Curves and Modularity]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]
- [[07 - Modular Forms/Concepts/Eta Function|Eta Function]]
