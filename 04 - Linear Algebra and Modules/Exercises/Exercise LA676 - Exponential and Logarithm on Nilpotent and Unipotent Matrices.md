---
title: "Exercise LA676: Exponential and Logarithm on Nilpotent and Unipotent Matrices"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 2, Section 2.6, Exercise 9, printed p. 47, PDF p. 59"
source_refs:
  - "S10/ch-2/sec-6/ex-9"
created: 2026-11-17
---

# Exercise LA676: Exponential and Logarithm on Nilpotent and Unipotent Matrices

## Problem Statement

> [!question] Original Chapter 2, Exercise 9
> A matrix $A$ is said to be *unipotent* if $A-I$ is nilpotent (i.e., if $A$ is of the form $A=I+N$, with $N$ nilpotent). Note that $\log A$ is defined whenever $A$ is unipotent, because the series in Definition 2.7 terminates.
>
> (a) Show that if $A$ is unipotent, then $\log A$ is nilpotent.
>
> (b) Show that if $X$ is nilpotent, then $e^X$ is unipotent.
>
> (c) Show that if $A$ is unipotent, then $\exp(\log A)=A$ and that if $X$ is nilpotent, then $\log(\exp X)=X$.
>
> *Hint:* Let $A(t)=I+t(A-I)$. Show that $\exp(\log(A(t)))$ depends polynomially on $t$ and that $\exp(\log(A(t)))=A(t)$ for all sufficiently small $t$.

Hall's Definition 2.7 uses the series

$$
\log A=\sum_{j=1}^{\infty}\frac{(-1)^{j+1}}{j}(A-I)^j
$$

whenever it converges. [S10, Ch. 2, §2.3, Definition 2.7, printed p. 37, PDF p. 49]

## Hints

> [!hint]- Hint 1
> A polynomial in a nilpotent matrix with zero constant term is again nilpotent. Factor out one copy of that matrix and use commutativity of its powers.

> [!hint]- Hint 2
> For $N^r=0$, both $\log(I+tN)$ and its exponential are finite polynomials in $t$. First apply Theorem 2.8 when $|t|\|N\|<1$, then use the fact that a scalar polynomial vanishing at infinitely many points is zero.

> [!hint]- Hint 3
> To prove the other inverse identity, apply the same argument to $\log(\exp(tX))$. Its series is finite because $\exp(tX)-I$ is a polynomial in $X$ with zero constant term.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation following the printed hint. The local inverse identities of Hall's Theorem 2.8 are named source inputs; the extension to all nilpotent and unipotent matrices is proved below.
>
> **A polynomial observation.** If $N^r=0$ and $q$ is any scalar polynomial, then $N$ commutes with $q(N)$ and
> $$
> (Nq(N))^r=N^rq(N)^r=0.
> $$
> Thus every polynomial in $N$ with zero constant term is nilpotent, with nilpotence exponent at most $r$.
>
> **(a)** Suppose $A=I+N$ with $N^r=0$. The logarithm series terminates:
> $$
> \log A=\sum_{j=1}^{r-1}\frac{(-1)^{j+1}}{j}N^j=Nq(N).
> $$
> The observation proves $(\log A)^r=0$, so $\log A$ is nilpotent.
>
> **(b)** If $X^r=0$, then
> $$
> e^X=I+\sum_{j=1}^{r-1}\frac{X^j}{j!},
> \qquad e^X-I=Xq(X)
> $$
> for a polynomial $q$. Consequently $(e^X-I)^r=0$, and $e^X$ is unipotent.
>
> **(c), first identity.** Fix $A=I+N$ with $N^r=0$ and set
> $$
> A(t)=I+tN,\qquad
> L(t)=\log A(t)=\sum_{j=1}^{r-1}\frac{(-1)^{j+1}}{j}t^jN^j.
> $$
> Every summand of $L(t)$ contains a positive power of $N$. Therefore $L(t)^r=0$ for every $t$, and
> $$
> P(t):=\exp(L(t))=\sum_{k=0}^{r-1}\frac{L(t)^k}{k!}
> $$
> is a matrix whose entries are polynomials in $t$. All sums are finite; no rearrangement of an infinite series is involved.
>
> Write $\|\cdot\|$ for the Hilbert–Schmidt norm. Hall's Theorem 2.8 gives
> $$
> \exp(\log B)=B\qquad\text{if }\|B-I\|<1.
> $$
> For sufficiently small real $t$, $\|A(t)-I\|=|t|\|N\|<1$. Hence $P(t)=I+tN$ on an interval around zero. Every entry of $P(t)-(I+tN)$ is a scalar polynomial vanishing at infinitely many values of $t$, so it is the zero polynomial. Evaluating at $t=1$ gives $\exp(\log A)=A$.
>
> **(c), second identity.** Now let $X^r=0$ and put
> $$
> U(t)=\exp(tX)=I+\sum_{j=1}^{r-1}\frac{t^jX^j}{j!}.
> $$
> By the observation, $(U(t)-I)^r=0$ for every $t$. Thus
> $$
> Q(t):=\log U(t)
> =\sum_{k=1}^{r-1}\frac{(-1)^{k+1}}{k}(U(t)-I)^k
> $$
> is also a matrix polynomial in $t$. The other local identity in Theorem 2.8 states
> $$
> \log(\exp Y)=Y\qquad\text{if }\|Y\|<\log2.
> $$
> For all sufficiently small real $t$, this applies to $Y=tX$, giving $Q(t)=tX$. The same entrywise polynomial argument extends the equality to every $t$. At $t=1$ it gives $\log(\exp X)=X$.
>
> If $r=1$, the nilpotent matrix is zero and the unipotent matrix is $I$; the empty sums above are zero, and both conclusions remain valid.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Logarithms|Matrix Logarithms]]
- [[04 - Linear Algebra and Modules/Concepts/Hilbert-Schmidt Norm|Hilbert–Schmidt Norm]]
- [[04 - Linear Algebra and Modules/Concepts/Jordan Canonical Form|Jordan Canonical Form]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]

## Notes

- **Source status:** The complete original exercise and printed hint were checked on a 200 dpi image of printed p. 47 / PDF p. 59.
- **Imported input:** Theorem 2.8 and its local inverse hypotheses were checked at printed pp. 38–39 / PDF pp. 50–51. That proof does not require Exercises 9 or 10. The polynomial identity step uses the elementary fact that a nonzero polynomial has only finitely many roots.
- **Method boundary:** Nilpotence makes every relevant series finite and removes the small-norm restriction. For general $X$, convergence of $\log(e^X)$ alone does not imply $\log(e^X)=X$: $X=2\pi iI$ gives $e^X=I$ and the series logarithm $\log I=0$.
- **Concrete verification:** For $N=\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix}$, $N^3=0$. Then $\log(I+N)=N-N^2/2$, whose exponential is $I+N$; also $e^N=I+N+N^2/2$, and its finite logarithm is $N$.
- **Routing:** The principal tools are nilpotent matrix polynomials and the local matrix logarithm.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
