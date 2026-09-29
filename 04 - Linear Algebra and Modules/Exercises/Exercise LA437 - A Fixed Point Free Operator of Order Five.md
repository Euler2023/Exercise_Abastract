---
title: "Exercise LA437: A Fixed Point Free Operator of Order Five"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - cyclotomic-polynomials
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIV, Exercises, Exercise 21, printed p. 570, PDF p. 585"
created: 2026-09-29
---

# Exercise LA437: A Fixed Point Free Operator of Order Five

## Problem Statement

> [!question] Lang, Chapter XIV, Exercise 21
> Let $V$ be a finite dimensional vector space over $\mathbb Q$ and let $A:V\to V$ be a $\mathbb Q$-linear map such that $A^5=\operatorname{Id}$. Assume that if $v\in V$ is such that $Av=v$, then $v=0$. Prove that $\dim V$ is divisible by $4$.

## Hints

> [!hint]- Hint 1: Remove the factor $t-1$
> The hypothesis makes $A-I$ invertible. Factor $A^5-I=(A-I)(A^4+A^3+A^2+A+I)$.

> [!hint]- Hint 2: Enlarge the scalar field
> The polynomial $\Phi_5(t)=t^4+t^3+t^2+t+1$ is irreducible over $\mathbb Q$: apply Eisenstein at $5$ after replacing $t$ by $t+1$. Use $\Phi_5(A)=0$ to make $V$ a vector space over $\mathbb Q[t]/(\Phi_5)$.

## Solution

> [!success]- Independent solution
> If $V=0$, its dimension is $0$, which is divisible by $4$. Suppose $V\ne0$. The fixed-vector hypothesis says $\ker(A-I)=0$. Since $V$ is finite-dimensional, $A-I$ is invertible. Thus
>
> $$
> 0=A^5-I=(A-I)\Phi_5(A)
> \quad\Longrightarrow\quad \Phi_5(A)=0,
> \qquad \Phi_5(t)=t^4+t^3+t^2+t+1.
> $$
>
> Direct expansion gives
>
> $$
> \Phi_5(t+1)=t^4+5t^3+10t^2+10t+5.
> $$
>
> Eisenstein's criterion at the prime $5$ makes this polynomial irreducible over $\mathbb Q$: every nonleading coefficient is divisible by $5$, and its constant term is not divisible by $25$. Substitution by $t+1$ is an automorphism of $\mathbb Q[t]$, so $\Phi_5$ itself is irreducible. Hence $K=\mathbb Q[t]/(\Phi_5)$ is a field of degree $4$ over $\mathbb Q$.
>
> Define a scalar action on $V$ by $\overline f\,v=f(A)v$. If $f-g$ is divisible by $\Phi_5$, then $f(A)=g(A)$, so the action is well-defined. Polynomial addition and multiplication prove the vector-space axioms, and $1$ acts as the identity. In particular, a nonzero element of $K$ acts invertibly, with inverse given by its inverse in $K$.
>
> A finite $\mathbb Q$-basis spans $V$ over $K$, so $r=\dim_KV$ is finite. Choose a $K$-basis $v_1,\ldots,v_r$, and write $\alpha=\overline t$. Since $1,\alpha,\alpha^2,\alpha^3$ is a $\mathbb Q$-basis of $K$, the vectors
>
> $$
> v_j,\ Av_j,\ A^2v_j,\ A^3v_j
> \qquad(1\le j\le r)
> $$
>
> form a $\mathbb Q$-basis of $V$. Spanning follows by expanding each $K$-coefficient in that basis of $K$; independence follows first from $K$-independence of the $v_j$, then from $\mathbb Q$-independence of $1,\alpha,\alpha^2,\alpha^3$. Therefore $\dim_{\mathbb Q}V=4r$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Cyclic Vectors and Companion Matrices|Cyclic Vectors and Companion Matrices]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]

## Notes

- **Source and proof status:** [S2, Ch. XIV, Ex. 21, printed p. 570, PDF p. 585], checked on the page image. The scalar-extension argument is an independent solution.
- **Imported standard input:** Eisenstein's irreducibility criterion over $\mathbb Q$ is used with prime $5$; the criterion is not proved in this note. The polynomial substitution and every subsequent dimension step are displayed.
- **Boundary:** The absence of nonzero fixed vectors is essential: the identity operator on a one-dimensional rational space satisfies $A^5=I$ but violates the conclusion. The assertion is about rational dimension.
