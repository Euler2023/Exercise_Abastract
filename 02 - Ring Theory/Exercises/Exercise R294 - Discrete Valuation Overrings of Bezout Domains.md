---
title: "Exercise R294: Discrete Valuation Overrings of Bezout Domains"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - bezout-domains
  - valuation-rings
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XII, Exercises, Exercise 5, printed p. 496, PDF p. 511"
created: 2026-09-25
---

# Exercise R294: Discrete Valuation Overrings of Bezout Domains

## Problem Statement

> [!question] Lang, Chapter XII, Exercise 5
> Let $A$ be an entire ring with quotient field $K$. Assume every finitely generated ideal of $A$ is principal. Let $\mathcal O$ be a discrete valuation ring of $K$ containing $A$. Show that $\mathcal O=A_{(p)}$ for some element $p$ of $A$, and that $p$ generates the maximal ideal of $\mathcal O$.

> [!warning] Source issue: the localization claim needs a stronger hypothesis
> The printed assumptions make $A$ a Bézout domain. They imply $\mathcal O=A_P$ for the center $P=A\cap\mathfrak m_{\mathcal O}$ and allow a uniformizer $p\in A$ of $\mathcal O$. They do **not** imply $P=(p)$ in $A$. Thus the printed notation $A_{(p)}$, if it means localization at the principal prime ideal $(p)$, can be false. The solution proves the valid assertions and gives a counterexample to the stronger one.

## Hints

> [!hint]- Hint 1: Cancel a Bézout gcd
> Write $x=a/b\in\mathcal O$ and $a=da'$, $b=db'$ with $(a',b')=A$. Show that $b'$ cannot be in the center $P$.

> [!hint]- Hint 2: Pull a uniformizer into $A$
> Express a uniformizer $\pi\in\mathcal O$ as $a/b$ with $a,b\in A$. Use a generator of $(a,b)$ to produce an element of $A$ with valuation $1$.

> [!hint]- Hint 3: Test principality separately
> Consider the rank-two valuation ring for the composite $(t,u)$ valuation on $k((u))((t))$ and its coarser $t$-adic discrete valuation ring.

## Solution

> [!success]- Solution
> Let $v:K^\times\to\mathbb Z$ be the normalized valuation of $\mathcal O$, and put $P=A\cap\mathfrak m_{\mathcal O}$. First we prove the precise localization statement $\mathcal O=A_P$. Inclusion $A_P\subseteq\mathcal O$ holds because every $s\in A\setminus P$ is a unit of $\mathcal O$. Conversely, take $x=a/b\in\mathcal O$ with $a,b\in A$ and $b\ne0$. Let $(a,b)=dA$ and write $a=da'$, $b=db'$. Since $d$ is an $A$-linear combination of $a,b$, one has $(a',b')=A$. If $b'\in P$, then $a'=xb'\in\mathfrak m_{\mathcal O}$ as well. An $A$-linear combination of $a'$ and $b'$ could not then equal $1$, a contradiction. Hence $b'\notin P$, and $x=a'/b'\in A_P$. This proves $\mathcal O=A_P$.
>
> A uniformizer can indeed be chosen in $A$. Let $\pi\in\mathcal O$ have $v(\pi)=1$ and write $\pi=a/b$ with nonzero $a,b\in A$. Let $d$ generate $(a,b)$. Because $d$ divides both $a$ and $b$ in $A\subseteq\mathcal O$, while $d$ is an $A$-linear combination of them, the ultrametric inequality gives $v(d)=\min(v(a),v(b))=v(b)$. Consequently $p=a/d\in A$ has $v(p)=v(a)-v(d)=1$, and $\mathfrak m_{\mathcal O}=p\mathcal O$.
>
> It remains to test the printed identification $P=(p)$. Let $k$ be any field, $K=k((u))((t))$, and assign each nonzero $f\in K$ the lexicographically ordered pair
>
> $$
> V(f)=\bigl(\operatorname{ord}_t f,\operatorname{ord}_u a_{\operatorname{ord}_t f}\bigr)
> \in\mathbb Z\times\mathbb Z,
> $$
>
> where $a_{\operatorname{ord}_t f}\in k((u))^\times$ is its leading $t$-coefficient. The ring $A=\{0\}\cup\{f:V(f)\ge(0,0)\}$ is a valuation ring of $K$, so every finitely generated ideal of $A$ is principal: among finitely many generators, one of least value generates their ideal. The coarser ring $\mathcal O=\{0\}\cup\{f\in K^\times:\operatorname{ord}_t(f)\ge0\}$ is a $t$-adic discrete valuation ring and contains $A$.
>
> Here $P=A\cap t\mathcal O$ consists of the elements of $A$ with positive $t$-order. It is not principal. Indeed, if $q\in P$ has $t$-order at least $2$, then $t\in P$ but $t\notin qA$. If $q$ has $t$-order $1$ and $V(q)=(1,m)$, choose $N>-m$; then $t/u^N\in P$ has value $(1,-N)<(1,m)$ and does not lie in $qA$. Thus no $q\in P$ generates $P$. In particular, the uniformizer $t\in A$ of $\mathcal O$ does not make $(t)$ the center: $t=u(t/u)$, with both factors in $A$ but neither in $(t)$, so $(t)$ is not even prime in $A$.
>
> The original conclusion involving $A_{(p)}$ is therefore false under the printed hypotheses. The corrected general conclusion is $\mathcal O=A_P$ with some $p\in A$ satisfying $\mathfrak m_{\mathcal O}=p\mathcal O$; these are distinct statements.

## Related Concepts

- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[02 - Ring Theory/Exercises/Exercise R293 - Valuation Rings over Principal Ideal Domains|Exercise R293]]

## Notes

- **Routing:** Bézout ideals, localization, and a nonprincipal center decide the result; the primary toolkit is ring theory.
- **Source status:** The statement was checked against [S2, Ch. XII, Exercise 5, printed p. 496, PDF p. 511]. The source gives the exercise, not a proof. The warning preserves its printed claim and records the independently established limitation.
- **Proof status:** Both the corrected theorem and the rank-two valuation counterexample are independently derived. No assertion that the printed $A_{(p)}$ conclusion holds for every Bézout domain is made.
