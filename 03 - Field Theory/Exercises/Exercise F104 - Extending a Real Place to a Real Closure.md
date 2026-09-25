---
title: "Exercise F104: Extending a Real Place to a Real Closure"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - real-places
  - real-closed-fields
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XI, Exercises, Exercise 10, printed p. 462, PDF p. 477"
created: 2026-09-25
---

# Exercise F104: Extending a Real Place to a Real Closure

## Problem Statement

> [!question] Lang, Chapter XI, Exercise 10
> Let $K$ be a real field and let $\varphi$ be a real place of $K$, taking its values in a real closed field $R$. Show that there is an extension of $\varphi$ to an $R$-valued place of a real closure of $K$. [Hint: first extend $\varphi$ to a quadratic closure of $K$. Then use Exercise 5.]

## Hints

> [!hint]- Hint 1: Order the residue field
> The finite image of $\varphi$ is a real subfield $k$ of $R$. Seek an ordering of $K$ that makes the valuation ring of $\varphi$ convex and induces the given order on $k$.

> [!hint]- Hint 2: A compatible ordering
> Let $U$ be the units with positive residue. Consider finite sums $\sum_j u_jx_j^2$ with $u_j\in U$. Show that $-1$ cannot be such a sum by reducing terms of smallest valuation.

> [!hint]- Hint 3: Extend the convex valuation
> Take an order-preserving real closure $K^{\mathrm{rc}}$. Its convex hull of the old valuation ring has algebraic, ordered residue extension over $k$, which can be embedded in $R$.

## Solution

> [!success]- Solution
> Let $V$ be the valuation ring of $\varphi$, $\mathfrak n$ its maximal ideal, and $k=V/\mathfrak n\subseteq R$ its ordered residue field. We first choose an ordering of $K$ compatible with this real place.
>
> Put $U=\{u\in V^\times:\overline u>0\text{ in }k\}$ and let $T$ consist of finite sums $\sum_j u_jx_j^2$ with $u_j\in U$ and $x_j\in K$. This is a preordering: it contains squares and is closed under sums and products. It is proper. Indeed, if $-1=\sum_j u_jx_j^2$ and all $x_j\in V$, reducing modulo $\mathfrak n$ gives $-1$ as a sum of nonnegative elements of the ordered field $k$. If some $x_j\notin V$, select one $x_j$ of smallest valuation, divide the equality by $x_j^2$, and reduce. The left side has residue zero, while the right side is a sum of nonnegative residues with at least the selected term strictly positive. Both cases are impossible.
>
> By the ordering-extension lemma for proper preorderings (the Artin–Schreier/Zorn argument), $T$ extends to a positive cone on $K$. Every unit of $V$ with positive residue is positive in this ordering. Moreover $V$ is convex: if $x>0$ lies outside $V$ and $c\in V$ is positive, then $c/x\in\mathfrak n$, so $1-c/x$ is a unit with positive residue $1$ and is therefore positive. Hence $x>c$. No element outside $V$ can lie between two elements of $V$.
>
> Let $K^{\mathrm{rc}}$ be a real closure of $K$ preserving this ordering; its existence is Lang's Theorem 2.11 (printed pp. 456–457 / PDF pp. 471–472). In $K^{\mathrm{rc}}$ take the convex hull
>
> $$
> V'=\{x\in K^{\mathrm{rc}}:|x|\le v\text{ for some }v\in V_{>0}\}.
> $$
>
> A convex subring of an ordered field is a valuation ring. Convexity of $V$ in $K$ gives $V'\cap K=V$; their maximal ideals also restrict correctly, because a nonzero element is a unit in $V'$ exactly when its reciprocal belongs to $V'$. Let $k'$ be the residue field of $V'$. It is ordered, since $V'$ is convex. It is algebraic over $k$: for any $x\in V'$ algebraic over $K$, divide a polynomial relation $\sum a_ix^i=0$ by a coefficient $a_j$ of smallest old valuation. The resulting coefficients belong to $V$, one has nonzero residue, and reduction gives a nonzero polynomial over $k$ annihilating $\overline x$.
>
> Choose a real closure $S$ of the ordered algebraic extension $k'/k$. Since $S/k$ is algebraic, $S$ is also a real closure of $k$. Inside the real closed field $R$, let $R_0$ be a real closure of $k$ with the induced ordering. Lang's uniqueness theorem (Theorem 2.9, printed pp. 455–456 / PDF pp. 470–471) gives an order-preserving $k$-isomorphism $S\simeq R_0$. Restricting it embeds $k'$ into $R$ and agrees with the original inclusion $k\subseteq R$. Compose the residue map $V'\to k'$ with this embedding and send elements outside $V'$ to $\infty$. The resulting $R$-valued place on $K^{\mathrm{rc}}$ restricts to $\varphi$ on $K$.

## Related Concepts

- [[03 - Field Theory/Concepts/Ordered and Real Closed Fields|Ordered and Real Closed Fields]]
- [[03 - Field Theory/Concepts/Real Places and Archimedean Valuation Rings|Real Places and Archimedean Valuation Rings]]
- [[03 - Field Theory/Concepts/Algebraic Extensions|Algebraic Extensions]]

## Notes

- **Source and proof status:** [S2, Ch. XI, Exercise 10, printed p. 462, PDF p. 477]. This is an independent derivation using a compatible ordering and convex valuation extension. It is an alternative to the source hint's quadratic-closure route.
- **External standard input:** The ordering-extension lemma that every proper preordering of a field extends to an ordering is used explicitly. The residue-algebraicity and convex-hull steps are proved in the solution.
- **Real-closure choice:** The exercise asserts existence for some real closure of $K$; the proof selects the one preserving the place-compatible ordering constructed above.
