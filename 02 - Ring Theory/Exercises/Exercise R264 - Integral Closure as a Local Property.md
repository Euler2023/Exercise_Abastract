---
title: "Exercise R264: Integral Closure as a Local Property"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - commutative-algebra
  - localization
  - integrally-closed
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IX, Exercises, Exercise 3, printed p. 410, PDF p. 425"
created: 2026-09-15
---

# Exercise R264: Integral Closure as a Local Property

## Problem Statement

> [!question]
> Let $R$ be an entire ring. Prove that $R$ is integrally closed if and only if the local ring $R_\mathfrak{p}$ is integrally closed for each prime ideal $\mathfrak{p}$.

## Hints

> [!hint]- Hint 1
> Let $K = \operatorname{Frac}(R)$ be the quotient field. Note that for any prime ideal $\mathfrak{p}$, the local ring $R_\mathfrak{p}$ has the same quotient field $K$.
>
> For the forward direction ($\implies$), if $u \in K$ satisfies a monic polynomial equation with coefficients in $R_\mathfrak{p}$, clear the denominators of the coefficients by multiplying by a suitable element $s \in R \setminus \mathfrak{p}$.

> [!hint]- Hint 2
> For the converse ($\impliedby$), recall the standard local-global intersection identity for an integral domain:
> $$
> R = \bigcap_{\mathfrak{p} \in \operatorname{Spec}(R)} R_\mathfrak{p} = \bigcap_{\mathfrak{m} \in \operatorname{Max}(R)} R_\mathfrak{m}.
> $$
> If $u \in K$ is integral over $R$, then $u$ is integral over each $R_\mathfrak{p}$.

## Solution

> [!success]- Solution
> Let $R$ be an entire ring (integral domain) with fraction field $K = \operatorname{Frac}(R)$.
> For any prime ideal $\mathfrak{p} \in \operatorname{Spec}(R)$, the localization $S^{-1} R$ with $S = R \setminus \mathfrak{p}$ is denoted $R_\mathfrak{p}$.
> Since $R$ is a domain and $\mathfrak{p}$ is a proper prime ideal, $0 \notin S$, and the fraction field of $R_\mathfrak{p}$ is canonically identified with $K$.
>
> ### Forward Direction: $R$ integrally closed $\implies R_\mathfrak{p}$ integrally closed for all $\mathfrak{p}$
>
> Assume $R$ is integrally closed in $K$.
> Let $\mathfrak{p}$ be an arbitrary prime ideal of $R$. We must show that the integral closure of $R_\mathfrak{p}$ in $K$ is $R_\mathfrak{p}$.
>
> Let $u \in K$ be integral over $R_\mathfrak{p}$.
> Then $u$ satisfies a monic polynomial relation with coefficients in $R_\mathfrak{p}$:
> $$
> u^n + c_{n-1} u^{n-1} + \cdots + c_1 u + c_0 = 0, \qquad c_i \in R_\mathfrak{p}.
> $$
> Each coefficient $c_i$ is of the form $c_i = a_i / s_i$ with $a_i \in R$ and $s_i \in R \setminus \mathfrak{p}$.
> Setting $s = s_0 s_1 \cdots s_{n-1}$, we have $s \in R \setminus \mathfrak{p}$ because $R \setminus \mathfrak{p}$ is multiplicatively closed.
> Then for each $i$, $s c_i \in R$.
>
> Multiply the monic equation by $s^n$:
> $$
> (s u)^n + (s c_{n-1}) (s u)^{n-1} + (s^2 c_{n-2}) (s u)^{n-2} + \cdots + (s^n c_0) = 0.
> $$
> For each $j \in \{1, \ldots, n\}$, the coefficient $s^j c_{n-j} = s^{j-1} (s c_{n-j})$ lies in $R$ because $s c_{n-j} \in R$ and $s \in R$.
> Thus $su \in K$ satisfies a monic polynomial with coefficients in $R$, which means $su$ is integral over $R$.
>
> Since $R$ is integrally closed in $K$, we deduce that
> $$
> su \in R.
> $$
> Because $s \in R \setminus \mathfrak{p}$, dividing by $s$ in $K$ yields:
> $$
> u = \frac{su}{s} \in R_\mathfrak{p}.
> $$
> Hence $R_\mathfrak{p}$ is integrally closed in $K$.
>
> ### Reverse Direction: $R_\mathfrak{p}$ integrally closed for all $\mathfrak{p} \implies R$ integrally closed
>
> Assume that $R_\mathfrak{p}$ is integrally closed in $K$ for every prime ideal $\mathfrak{p}$ of $R$ (in fact, it suffices that this holds for every maximal ideal $\mathfrak{m} \in \operatorname{Max}(R)$).
>
> Let $u \in K$ be integral over $R$.
> Since $R \subseteq R_\mathfrak{p}$ for every prime ideal $\mathfrak{p}$, $u$ is also integral over $R_\mathfrak{p}$.
> By hypothesis, $R_\mathfrak{p}$ is integrally closed, so
> $$
> u \in R_\mathfrak{p} \quad \text{for every prime ideal } \mathfrak{p} \in \operatorname{Spec}(R).
> $$
> Therefore,
> $$
> u \in \bigcap_{\mathfrak{p} \in \operatorname{Spec}(R)} R_\mathfrak{p}.
> $$
>
> We now verify the classical lemma:
> $$
> \bigcap_{\mathfrak{p} \in \operatorname{Spec}(R)} R_\mathfrak{p} = R.
> $$
> Clearly $R \subseteq \bigcap_\mathfrak{p} R_\mathfrak{p}$.
> Conversely, suppose for contradiction that there exists $u \in K \setminus R$ such that $u \in R_\mathfrak{p}$ for all $\mathfrak{p}$.
> Consider the conductor ideal (or denominator ideal) of $u$ in $R$:
> $$
> J = \{r \in R : r u \in R\} = (R :_R u).
> $$
> - Since $u \notin R$, $1 \notin J$, so $J$ is a proper ideal of $R$.
> - Since $J$ is a proper ideal, it is contained in at least one maximal ideal $\mathfrak{m} \in \operatorname{Max}(R)$.
> - However, $u \in R_\mathfrak{m}$ by assumption, which means there exist $a \in R$ and $s \in R \setminus \mathfrak{m}$ such that $u = a/s$.
> - Then $su = a \in R$, which implies $s \in J$.
> - But $J \subseteq \mathfrak{m}$, so $s \in \mathfrak{m}$, which contradicts $s \in R \setminus \mathfrak{m}$.
>
> This contradiction proves that $J = R$, so $1 \in J$, whence $u \in R$.
>
> Therefore, $u \in R$, which establishes that $R$ is integrally closed in $K$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]

## Notes

- **Independent derivation:** The proof provides complete derivations for both directions, including the denominator conductor argument for the intersection of localizations.
- **Maximal ideals suffice:** The proof shows that $R$ is integrally closed if and only if $R_\mathfrak{m}$ is integrally closed for all maximal ideals $\mathfrak{m}$, which is a slightly stronger and very useful variant.
