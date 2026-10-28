---
title: "Exercise G360: Coset Representatives for Raising the Level"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.7, Exercise 3.7.7, printed p. 98, PDF p. 112"
source_refs:
  - "S7/ch-3/sec-7/ex-7"
created: 2026-10-28
---

# Exercise G360: Coset Representatives for Raising the Level

## Problem Statement

> [!question] Original Exercise 3.7.7
> Let $p^e$ and $M$ be positive integers with $p$ prime, $e\ge1$, and $p\nmid M$. Let $m=p^{-1}\pmod M$, i.e. $mp\equiv1\pmod M$ and $0\le m<M$. Consider
> $$
> \alpha_j=\begin{pmatrix}1&0\\Mj&1\end{pmatrix}\quad(0\le j<p^e),\qquad
> \beta_j=\begin{pmatrix}1&(m_jp-1)/M\\M&m_jp\end{pmatrix},\quad m_j=m+jM\quad(0\le j<p^{e-1}).
> $$
> Show that
> $$
> \Gamma_0(p^eM)\backslash\Gamma_0(M)=\Bigl(\bigcup_j\Gamma_0(p^eM)\alpha_j\Bigr)\cup\Bigl(\bigcup_j\Gamma_0(p^eM)\beta_j\Bigr).
> $$

## Hints

> [!hint]- Hint 1
> Reduce the primitive bottom row modulo $p^e$ and split according to whether its second coordinate is a unit.

> [!hint]- Hint 2
> The two normalized row types are $(x,1)$ and $(1,py)$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Both matrix families have determinant one and lower-left entry divisible by $M$; the displayed upper-right entry of $\beta_j$ is integral by $m_jp\equiv1\pmod M$. For $g,h\in\Gamma_0(M)$, their left cosets modulo $\Gamma_0(p^eM)$ agree exactly when their primitive bottom rows are proportional by a unit modulo $p^e$. To see this, $gh^{-1}$ already has lower-left entry divisible by $M$; divisibility also by $p^e$ is equivalent to vanishing of the determinant of the two bottom rows modulo $p^e$. Since each row is unimodular over this local ring, determinant zero is equivalent to unit proportionality. Coprimality of $M,p$ then gives divisibility by $p^eM$.
>
> Every primitive row modulo $p^e$ has one of two unique normalizations. If its second entry is a unit, it is $(x,1)$ for a unique $x\pmod{p^e}$. The rows of $\alpha_j$ are $(Mj,1)$ and run through all such rows because $M$ is invertible modulo $p^e$. If its second entry is a nonunit, its first entry must be a unit; it normalizes to $(1,py)$ with a unique $y\pmod{p^{e-1}}$. The row of $\beta_j$, normalized by $M^{-1}$, is $(1,pM^{-1}(m+jM))=(1,p(M^{-1}m+j))$, and runs through all such rows. The types cannot overlap because unit status of the second coordinate is preserved under unit scaling. Consequently the listed $p^e+p^{e-1}$ representatives are pairwise distinct and cover every coset, proving the stated decomposition.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 98 / PDF 112. The solution above is independently derived.
- **Routing:** The principal toolkit is group-theory; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
