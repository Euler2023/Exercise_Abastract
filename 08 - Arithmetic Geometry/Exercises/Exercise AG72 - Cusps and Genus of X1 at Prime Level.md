---
title: "Exercise AG72: Cusps and Genus of X1 at Prime Level"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.1, Exercise 3.1.5, printed p. 71, PDF p. 85"
source_refs:
  - "S7/ch-3/sec-1/ex-5"
created: 2026-10-28
---

# Exercise AG72: Cusps and Genus of X1 at Prime Level

## Problem Statement

> [!question] Original Exercise 3.1.5
> Let $p$ be prime and let $X_1(p)=\Gamma_1(p)\backslash\mathcal H^*$.
>
> (a) Show that if $\gamma\in SL_2(\mathbb Z)_s$ where $s\in\mathbb Q\cup\{\infty\}$ (and as in Chapter 2 the group is its isotropy subgroup) then $\gamma$ has trace $\pm2$. Show that if $p$ is a prime then $\Gamma_0(p)_s=\{\pm I\}\Gamma_1(p)_s$. Deduce that natural projection $f:X_1(p)\longrightarrow X_0(p)$ is unramified at the cusps. Combine this with part (b) of the previous problem to show that $X_1(p)$ has $p-1$ cusps if $p>2$ and $2$ cusps if $p=2$.
>
> (b) Exercise 2.3.7 showed that $X_1(p)$ has no elliptic points if $p>3$, that $X_1(3)$ has no elliptic points of period $2$ and one elliptic point of period $3$, and that $X_1(2)$ has one elliptic point of period $2$ and no elliptic points of period $3$. Combine this information with part (a) to compute the genus of $X_1(p)$. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Conjugate a cusp stabilizer to the stabilizer of infinity. Modulo $p$, an upper triangular determinant-one matrix of trace $\pm2$ has both diagonal entries equal to the same sign.

> [!hint]- Hint 2
> The degrees to $X_0(p)$ and $X(1)$ are respectively $(p-1)/2$ and $(p^2-1)/2$ when $p>2$. Treat $p=2,3$ separately in the genus formula.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a).** Choose $\delta\in SL_2(\mathbb Z)$ with $\delta(s)=\infty$. Then $\delta\gamma\delta^{-1}$ is an integral determinant-one matrix with lower left entry zero. Its diagonal entries are both $1$ or both $-1$, so its trace is $\pm2$. Trace is unchanged under conjugation.
>
> For $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\Gamma_0(p)_s$, we have $c\equiv0\pmod p$, $ad\equiv1\pmod p$, and $a+d=2\epsilon$ for a sign $\epsilon\in\{1,-1\}$. Hence
> $$
> (a-\epsilon)^2\equiv a^2-2\epsilon a+1
> \equiv a(a+d)-2\epsilon a\equiv0\pmod p.
> $$
> Since $\mathbb F_p$ is a field, $a\equiv\epsilon$ and then $d\equiv\epsilon$. Thus $\epsilon\gamma\in\Gamma_1(p)_s$. The reverse containment $\{\pm I\}\Gamma_1(p)_s\subseteq\Gamma_0(p)_s$ follows from the definitions, proving equality.
>
> The cusp ramification degree is the index of these effective stabilizers, hence is $1$. The map is unramified at every cusp. The reduction map $\Gamma_0(p)\to\mathbb F_p^\times$, taking a matrix to its lower right entry, is surjective with kernel $\Gamma_1(p)$. Surjectivity follows by lifting a diagonal matrix in $SL_2(\mathbb F_p)$ to $SL_2(\mathbb Z)$, the reduction-surjectivity result proved in Chapter 1. Thus $[\Gamma_0(p):\Gamma_1(p)]=p-1$. Since $-I\notin\Gamma_1(p)$ for $p>2$, the effective degree is $(p-1)/2$; for $p=2$ the groups coincide and the degree is $1$.
>
> The fact that $X_0(p)$ has exactly two cusps is Exercise 3.1.4(b), independently proved in the linked prime-level note. Every point over a cusp is a cusp, and each of its unramified fibers has as many points as the degree. Therefore the cusp count is $2(p-1)/2=p-1$ for $p>2$, and $2$ for $p=2$.
>
> **(b).** Counting matrices in $SL_2(\mathbb F_p)$ gives $p(p^2-1)$: there are $p^2-1$ nonzero first columns, and for each one the determinant equation has $p$ choices of second column. The image of $\Gamma_1(p)$ has $p$ upper unipotent elements. Thus its integral index is $p^2-1$. The effective degree to $X(1)$ is $(p^2-1)/2$ for $p>2$, and $3$ for $p=2$.
>
> For $p>3$ the stated elliptic-point input and the genus formula give
> $$
> g(X_1(p))=1+\frac{p^2-1}{24}-\frac{p-1}{2}
> =\frac{(p-5)(p-7)}{24}.
> $$
> At $p=2$ we have $d=3,\varepsilon_2=1,\varepsilon_3=0,\varepsilon_\infty=2$, giving $g=1+3/12-1/4-1=0$. At $p=3$ we have $d=4,\varepsilon_2=0,\varepsilon_3=1,\varepsilon_\infty=2$, giving $g=1+4/12-1/3-1=0$. These include all primes.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 71 / PDF 85. The solution above is independently derived.
- **Imported inputs:** Reduction surjectivity from Exercise 1.2.2; elliptic-point counts from Exercise 2.3.7, printed p. 56 / PDF p. 71; the genus formula from Theorem 3.1.1. The cusp and genus computations here are independent.
- **Routing:** The principal toolkit is arithmetic-geometry; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
