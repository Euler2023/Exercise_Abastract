---
title: "Exercise F102: A Missing Reality Hypothesis for Canonical Places"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - real-places
  - source-issue
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XI, Exercises, Exercise 8, printed p. 462, PDF p. 477"
created: 2026-09-25
---

# Exercise F102: A Missing Reality Hypothesis for Canonical Places

## Problem Statement

> [!question] Lang, Chapter XI, Exercise 8
> Define a real field $K$ to be quadratically closed if for all $a\in K$ either $\sqrt a$ or $\sqrt{-a}$ lies in $K$. The ordering of a quadratically closed real field $K$ is then uniquely determined, and so is the real closure of such a field, up to an isomorphism over $K$.
>
> Suppose that $K$ is quadratically closed. Let $F$ be a subfield of $K$ and suppose that $F$ is maximal archimedean in $K$. Let $\varphi$ be a place of $K$ over $F$, with values in a field which is algebraic over $F$. Show that $\varphi$ is equivalent to the canonical place of $K$ over $F$.

> [!warning] Source issue: the last assertion is false as printed
> The printed statement requires only an algebraic value field, which may be nonreal. A place with residue field $F(\sqrt{-1})$ can differ from the canonical place. The solution gives an explicit counterexample and then proves the intended assertion with **real algebraic** value field (equivalently, real residue field) added.

## Hints

> [!hint]- Hint 1: Uniqueness of the order
> In any ordering, nonzero squares are positive. Can both $a$ and $-a$ be squares in a real field?

> [!hint]- Hint 2: Test the printed place claim
> Take the real closure of $\mathbb R(t)$ with $t$ ordered larger than every real constant. Compare its canonical place at infinity with an extension of the $(t-1)$-adic place.

> [!hint]- Hint 3: Repair with a real residue field
> For a valuation with real residue field, a finite sum of squares can lie in the valuation ring only if each summand does. Use $c=x+(c-x)$ for $0<x<c\in F$ to compare valuation rings. Then use the algebraicity of the residue of $x$ to rule out $x$ being infinitely large over $F$.

## Solution

> [!success]- Solution
> **The order and real closure.** Because $K$ is real, $-1$ is not a sum of squares, so $a$ and $-a$ cannot both be squares for $a\ne0$. Quadratic closure says one of them is a square. Therefore the positive cone of every ordering must be exactly $K^{\times2}$; the ordering is unique. Lang's real-closure uniqueness theorem (Theorem 2.9, printed pp. 455–456 / PDF pp. 470–471) then makes the real closure unique up to an isomorphism over this ordered $K$.
>
> **Counterexample to the place assertion as printed.** Let $F=\mathbb R$, order $F(t)$ by $t>c$ for every $c\in F$, and let $K$ be its order-preserving real closure. Then $K$ is real closed, hence quadratically closed. The canonical place of $F(t)$ over $F$ is the place at infinity. Its residue field is $F$: a rational function finite at infinity has a real leading-coefficient ratio as residue. Moreover, $F$ is maximal archimedean in $F(t)$: if a finite rational function $x$ is not constant, subtracting its residue $c\in F$ gives a nonzero infinitesimal, whose reciprocal is infinitely large in $F(x)$. Exercise 7 carries the same canonical residue field $F$ to the real closure $K$, and the same reciprocal argument shows that $F$ remains maximal archimedean in $K$.
>
> Now take the $(t-1)$-adic place of $F(t)$ and extend its valuation to the algebraic extension $K/F(t)$. Such an extension exists by the valuation-extension theorem; its residue field is algebraic over $F$. Since $t$ has residue $1$ and $t-2>0$ in the chosen ordering, $u=\sqrt{t-2}$ belongs to $K$. The element $u$ is a unit for the extended valuation and its residue satisfies $\overline{u}^{\,2}=\overline{t-2}=-1$. Thus the residue field is nonreal (indeed, it is $\mathbb C$, since $F=\mathbb R$ is real closed and the residue extension is algebraic). This place sends $t$ to $1$, whereas the canonical place at infinity has a pole at $t$. They are not equivalent, even though the printed algebraicity hypothesis holds.
>
> **Corrected assertion.** Suppose instead that $\varphi$ has values in a **real** field $L$ algebraic over $F$. Write $V$ for its valuation ring and $\mathfrak n$ for its maximal ideal; its residue field is a real subfield of $L$. Any ordering of $L$ restricts to the unique ordering of $K$ on $F$: if $a\in F$ is positive in $K$, then $a=b^2$ for some $b\in K$, and $a=\varphi(a)\ne0$ forces $b$ to be a valuation unit, so $a=\varphi(b)^2>0$ in $L$. We show that $V$ equals the canonical valuation ring $\mathcal O_F$ of elements not infinitely large over $F$.
>
> First observe that if $y_1^2+\cdots+y_s^2\in V$, then every $y_j\in V$. Otherwise choose a $y_j$ of smallest valuation and with negative valuation. After dividing the sum by $y_j^2$, its residue is zero on the left but a sum of squares in the real residue field with the $j$th term equal to $1$ on the right, a contradiction.
>
> If $x\in\mathcal O_F$, choose $c\in F_{>0}$ with $|x|<c$. For $x\ge0$, quadratic closure gives $x=a^2$ and $c-x=b^2$ in $K$. Since $c=a^2+b^2\in V$, the preceding observation gives $a,b\in V$ and hence $x\in V$. Apply this to $-x$ if $x<0$. Therefore $\mathcal O_F\subseteq V$.
>
> Conversely, take $x\in V$ and put $r=\varphi(x)\in L$. The ordered algebraic extension $L/F$ is archimedean over $F$ by Lang's root bound (Lemma 2.6); choose $c\in F_{>0}$ with $|r|<c$. If $x>c$, then $x-c$ is a square in $K$ and belongs to $V$, so $r-c=\varphi(x-c)$ must be a nonnegative square in $L$, contradicting $r<c$. The case $x<-c$ is analogous. Thus $|x|<c$ and $x\in\mathcal O_F$. We have $V=\mathcal O_F$, and hence also $\mathfrak n=\mathfrak m_F$. The corrected place is equivalent to the canonical place.

## Related Concepts

- [[03 - Field Theory/Concepts/Ordered and Real Closed Fields|Ordered and Real Closed Fields]]
- [[03 - Field Theory/Concepts/Real Places and Archimedean Valuation Rings|Real Places and Archimedean Valuation Rings]]
- [[03 - Field Theory/Concepts/Algebraic Closure|Algebraic Closure]]

## Notes

- **Exact source:** [S2, Ch. XI, Exercise 8, printed p. 462, PDF p. 477]. The original says only “a field which is algebraic over $F$”; it does not say “real.” This omission cannot be silently supplied.
- **Proof status:** The uniqueness argument, counterexample, and corrected proof are independent. The counterexample invokes the standard valuation-extension theorem for the algebraic extension $K/F(t)$; that existence theorem is an **external standard input**, not proved in this note. Exercise 7 supplies the canonical residue calculation after real closure.
- **Boundary:** A nonreal algebraic residue field permits cancellation among residue squares. The real-residue hypothesis is exactly what the valuation-ring comparison above needs.
