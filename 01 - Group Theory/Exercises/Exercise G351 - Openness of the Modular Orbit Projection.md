---
title: "Exercise G351: Openness of the Modular Orbit Projection"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 2, Section 2.1, Exercise 2.1.1, printed p. 47, PDF p. 62"
source_refs:
  - "S7/ch-2/sec-1/ex-1"
created: 2026-10-28
---

# Exercise G351: Openness of the Modular Orbit Projection

## Problem Statement

> [!question] Original Exercise 2.1.1
> Show that giving $Y(\Gamma)$ the quotient topology makes the natural surjection $\pi$ an open mapping.
>
> **Context from Section 2.1.** Here $\Gamma$ is a congruence subgroup of $SL_2(\mathbb Z)$, $\mathcal H=\{z\in\mathbb C:\operatorname{Im}z>0\}$, $Y(\Gamma)=\Gamma\backslash\mathcal H$, and $\pi(z)=\Gamma z$. The quotient topology declares $A\subseteq Y(\Gamma)$ open exactly when $\pi^{-1}(A)$ is open in $\mathcal H$.

## Hints

> [!hint]- Hint 1
> For an open subset $U\subseteq\mathcal H$, describe every point whose orbit belongs to $\pi(U)$.

> [!hint]- Hint 2
> Prove $\pi^{-1}(\pi(U))=\bigcup_{\gamma\in\Gamma}\gamma(U)$. Each fractional linear transformation $\gamma$ is a homeomorphism of $\mathcal H$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation using orbit saturation and the definition of the quotient topology.
>
> Let $U\subseteq\mathcal H$ be open. A point $z$ lies in $\pi^{-1}(\pi(U))$ if and only if $\Gamma z=\Gamma u$ for some $u\in U$. This means $z=\gamma u$ for some $\gamma\in\Gamma$. Therefore
> $$
> \pi^{-1}(\pi(U))=\Gamma(U)=\bigcup_{\gamma\in\Gamma}\gamma(U).
> $$
> Each matrix $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb Z)$ acts by $z\mapsto(az+b)/(cz+d)$. Its denominator has no zero in $\mathcal H$, its image lies in $\mathcal H$ because
> $$
> \operatorname{Im}(\gamma z)=\frac{\operatorname{Im}z}{|cz+d|^2}>0,
> $$
> and its inverse is the corresponding map for $\gamma^{-1}$. Thus it is a homeomorphism and $\gamma(U)$ is open. The displayed union is open, so the quotient-topology criterion implies that $\pi(U)$ is open. This holds for every open $U$, proving that $\pi$ is an open mapping.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[07 - Modular Forms/Concepts/Modular Group|Modular Group]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The original exercise was checked on the 200 dpi image of printed p. 47 / PDF p. 62. The definitions used above are on printed p. 45 / PDF p. 60.
- **Method boundary:** The proof works for any group acting on a topological space by homeomorphisms. It does not assert that every quotient map is open; openness here follows from the orbit-saturation formula.
- **Routing:** Orbit saturation under a group action does the work, so the note is classified under Group Theory.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
