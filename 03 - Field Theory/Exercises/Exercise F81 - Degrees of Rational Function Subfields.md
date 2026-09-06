---
title: "Exercise F81: Degrees of Rational Function Subfields"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 20, printed p. 254, PDF p. 269"
created: 2026-09-06
---

# Exercise F81: Degrees of Rational Function Subfields

## Problem Statement

> [!question] Lang, Chapter V, Exercise 20
> (a) Let $E=F(x)$ where $x$ is transcendental over $F$. Let $K\ne F$ be a subfield of $E$ which contains $F$. Show that $x$ is algebraic over $K$.
>
> (b) Let $E=F(x)$. Let $y=f(x)/g(x)$ be a rational function, with relatively prime polynomials $f,g\in F[x]$. Let $n=\max(\deg f,\deg g)$. Suppose $n\ge1$. Prove that
> $$
> [F(x):F(y)]=n.
> $$

## Hints

> [!hint]- Hint 1
> Use the polynomial $f(T)-yg(T)$.

> [!hint]- Hint 2
> Prove that $f(T)-Yg(T)$ is irreducible in $F[T,Y]$ by comparing degrees in $Y$.

## Solution

> [!success]- Solution and proof status
> **(a)** Choose $y\in K\setminus F$, and write $y=f(x)/g(x)$ with $f,g\in F[X]$, $g\ne0$. The polynomial $f(T)-yg(T)\in K[T]$ vanishes at $x$. It is nonzero: if every coefficient vanished, comparison with any nonzero coefficient of $g$ would give $y\in F$. Thus $x$ is algebraic over $K$.
>
> **(b)** Here $x$ remains transcendental as in (a), and a rational function entails $g\ne0$. The coprimality and $n\ge1$ imply $y\notin F$: otherwise $f=yg$, so the common divisor $g$ would force both polynomials to be constant. By (a), $x$ is algebraic over $F(y)$. If $y$ were algebraic over $F$, transitivity would make $x$ algebraic over $F$. Hence $y$ is transcendental.
>
> Consider $H(T,Y)=f(T)-Yg(T)$. In a factorization in $F[T,Y]$, one factor has degree zero in $Y$, and hence lies in $F[T]$. It divides both $f$ and $g$, so is a unit. Therefore $H$ is irreducible. Its degree in $T$ is $n>0$, so it is primitive over the UFD $F[Y]$; Gauss's lemma yields irreducibility over $F(Y)$.
>
> The isomorphism $F(Y)\to F(y)$ sends $H$ to $f(T)-yg(T)$. Its degree is $n$, since transcendence of $y$ prevents cancellation of its leading coefficient. It is an irreducible polynomial vanishing at $x$, and therefore the extension has degree $n$.

## Related Concepts

- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]

## Notes

- **Imported input:** Gauss’s lemma over a UFD [S2, Ch. IV, §2, printed pp. 181–182, PDF pp. 196–197].
- **Related exercise:** [[03 - Field Theory/Exercises/Exercise F62 - Automorphisms of K of X over an Arbitrary Field|F62]] uses this degree calculation to classify automorphisms; that different numbered task keeps its own note.

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 20, printed p. 254, PDF p. 269]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.
