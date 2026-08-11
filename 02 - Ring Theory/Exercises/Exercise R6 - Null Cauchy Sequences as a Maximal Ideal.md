---
title: "Exercise R6: Null Cauchy Sequences as a Maximal Ideal"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - ideals
  - maximal-ideals
  - cauchy-sequences
source: "Zou Ying, Mathematical Analysis, Vol. I (Chinese), Ch. 2, Exercise 6, printed pp. 39–40; user-supplied source-page image (physical PDF pages not retained in the image)"
created: 2026-08-11
---

# Exercise R6: Null Cauchy Sequences as a Maximal Ideal

## Problem Statement

> [!question] Exercise 6
> Let $E$ be the set of rational Cauchy sequences, and let $\mathcal X$ be a nonempty subset of $E$. We call $\mathcal X$ an ideal of $E$ if it has the following properties:
>
> 1. For any $\langle r_n\rangle,\langle s_n\rangle\in\mathcal X$,
>    $$
>    \langle-r_n\rangle\in\mathcal X,
>    \qquad
>    \langle r_n\rangle+\langle s_n\rangle\in\mathcal X.
>    $$
> 2. For any $\langle a_n\rangle\in E$ and $\langle r_n\rangle\in\mathcal X$,
>    $$
>    \langle a_n\rangle\cdot\langle r_n\rangle\in\mathcal X.
>    $$
>
> We call $\mathcal X$ a maximal ideal of $E$ if $\mathcal X$ is an ideal of $E$ and there is no ideal $\mathcal Y$ of $E$ satisfying
> $$
> \mathcal X \subsetneq\mathcal Y\subsetneq E.
> $$
>
> 1. Prove that 
> $$
>    \mathcal{X}=\left\{ \langle r_n\rangle\in E \mid \lim_{n\to+\infty}r_n =0\right \}
>  $$  
>  is an ideal of $E$.
> 2. Let $\mathcal Y$ be any ideal of $E$ such that $\mathcal X\subsetneq\mathcal Y$, and choose $\langle s_n\rangle\in\mathcal Y-\mathcal X$. Prove the following:
>
>    a. There exists $\langle r_n\rangle\in E$ such that
>       $$
>       \langle r_n\rangle+\langle s_n\rangle\in\mathcal Y,
>       \qquad
>       r_n+s_n\ne0\quad(\forall n\in\mathbb N),
>       $$
>       and
>       $$
>       \left\langle\frac1{r_n+s_n}\right\rangle\in E.
>       $$
>    b. The constant sequence $\langle1\rangle$ belongs to $\mathcal Y$.
>    c. Deduce that $\mathcal X$ is a maximal ideal.

## Hints

> [!hint]- Hint 1
> Every Cauchy sequence is bounded. Thus, if $a=(a_n)$ is Cauchy and $r_n\to0$, use $|a_nr_n|\leq B|r_n|$ to prove that the product tends to $0$.

> [!hint]- Hint 2
> If a Cauchy sequence $(s_n)$ does not tend to $0$, then there are $\delta>0$ and $N$ such that $|s_n|\geq\delta$ for every $n\geq N$. First use the failure of convergence to $0$ to find arbitrarily late terms of definite size, and then compare every other term in the same tail with one of them using the Cauchy condition.

> [!hint]- Hint 3
> Modify only finitely many terms of $(s_n)$ to obtain a sequence $(t_n)$ that is nowhere zero, and put $r_n=t_n-s_n$. To prove that the reciprocal sequence is Cauchy, use
> $$
> \left|\frac1{t_n}-\frac1{t_m}\right|
> =\frac{|t_n-t_m|}{|t_nt_m|}.
> $$
> Finally, an ideal containing the multiplicative identity $1$ is the whole ring.

## Solution

> [!success]- Solution
> Under termwise addition and multiplication, $E$ is a commutative ring. Put
> $$
> \mathcal X=\{\langle r_n\rangle\in E:r_n\to0\}.
> $$
>
> ### 1. The set $\mathcal X$ is an ideal of $E$
>
> The zero sequence belongs to $\mathcal X$, so $\mathcal X$ is nonempty. If $r_n\to0$ and $s_n\to0$, then
> $$
> -r_n\to0,
> \qquad
> r_n+s_n\to0.
> $$
> Hence $\mathcal X$ is closed under additive inverses and addition.
>
> Take $\langle a_n\rangle\in E$ and $\langle r_n\rangle\in\mathcal X$. The Cauchy sequence $(a_n)$ is bounded, so there is a constant $B\geq0$ such that $|a_n|\leq B$ for every $n$. Given $\varepsilon>0$, choose $N$ so that
> $$
> |r_n|<\frac{\varepsilon}{B+1}
> $$
> whenever $n\geq N$. Then
> $$
> |a_nr_n|\leq B|r_n|<\varepsilon,
> $$
> so $a_nr_n\to0$. Therefore
> $$
> \langle a_n\rangle\cdot\langle r_n\rangle\in\mathcal X,
> $$
> proving that $\mathcal X$ is an ideal of $E$. The constant sequence $\langle1\rangle$ is not in $\mathcal X$, so $\mathcal X$ is proper.
>
> ### 2(a). Construction of a unit in $E$
>
> Choose
> $$
> \langle s_n\rangle\in\mathcal Y-\mathcal X.
> $$
> Since $s_n\not\to0$, there is an $\varepsilon_0>0$ such that, for every $N$, some $m\geq N$ satisfies
> $$
> |s_m|\geq\varepsilon_0.
> $$
> Since $(s_n)$ is Cauchy, choose $N_0$ such that
> $$
> |s_n-s_m|<\frac{\varepsilon_0}{2}
> \qquad(n,m\geq N_0).
> $$
> Fix $n\geq N_0$ and choose $m\geq N_0$ with $|s_m|\geq\varepsilon_0$. Then
> $$
> |s_n|
> \geq |s_m|-|s_n-s_m|
> >\frac{\varepsilon_0}{2}.
> $$
> Thus the tail of $(s_n)$ is uniformly bounded away from $0$.
>
> Define a rational sequence by
> $$
> t_n=
> \begin{cases}
> 1,&n<N_0,\\
> s_n,&n\geq N_0,
> \end{cases}
> \qquad
> r_n=t_n-s_n.
> $$
> The sequence $(t_n)$ differs from the Cauchy sequence $(s_n)$ in only finitely many terms, so $(t_n)$ is Cauchy. Moreover, $r_n=0$ for every $n\geq N_0$, and hence $r_n\to0$. Thus
> $$
> \langle r_n\rangle\in\mathcal X\subseteq\mathcal Y.
> $$
> Consequently,
> $$
> \langle r_n\rangle+\langle s_n\rangle
> =\langle t_n\rangle\in\mathcal Y,
> $$
> and $t_n=r_n+s_n\ne0$ for every $n$.
>
> For $n,m\geq N_0$,
> $$
> \left|\frac1{t_n}-\frac1{t_m}\right|
> =\frac{|s_n-s_m|}{|s_ns_m|}
> \leq\frac{4}{\varepsilon_0^2}|s_n-s_m|.
> $$
> The right-hand side tends to $0$ in the Cauchy sense because $(s_n)$ is Cauchy. Therefore $(1/t_n)$ is Cauchy, and
> $$
> \left\langle\frac1{r_n+s_n}\right\rangle
> =\left\langle\frac1{t_n}\right\rangle\in E.
> $$
>
> ### 2(b). The ideal $\mathcal Y$ contains $\langle1\rangle$
>
> We have $\langle t_n\rangle\in\mathcal Y$ and $\langle1/t_n\rangle\in E$. Since $\mathcal Y$ is an ideal of $E$,
> $$
> \langle1\rangle
> =\langle t_n\rangle\cdot\left\langle\frac1{t_n}\right\rangle
> \in\mathcal Y.
> $$
>
> ### 2(c). Maximality
>
> For any $\langle a_n\rangle\in E$, the absorption property of $\mathcal Y$ gives
> $$
> \langle a_n\rangle
> =\langle a_n\rangle\cdot\langle1\rangle
> \in\mathcal Y.
> $$
> Hence $\mathcal Y=E$. Every ideal strictly containing $\mathcal X$ is therefore equal to $E$, and $\mathcal X$ is a maximal ideal.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[03 - Field Theory/Concepts/Field Definition|Fields]]

## Notes

- The definition and elementary properties of Cauchy sequences may be found in any standard textbook on mathematical analysis. This exercise uses only boundedness of Cauchy sequences, invariance of the Cauchy property under changes to finitely many terms, and a direct $\varepsilon$-argument.
- The direct source is Zou Ying, *Mathematical Analysis, Vol. I* (Chinese), Chapter 2, Exercise 6. The opening of the problem appears at the end of printed page 39 and the remainder on printed page 40. The user-supplied image does not display the PDF viewer's physical page number, so that number remains unverified.
- The solution above is an independent derivation for this vault, not a transcription of a solution supplied by the textbook.
- The structure closely parallels the construction of the real numbers from rational Cauchy sequences in Edmond Ramis, Claude Deschamps, and Jacques Odoux, *Cours de mathématiques spéciales, tome 3: Topologie et éléments d’analyse* (Masson, 1976). The available evidence supports describing the exercise as likely adapted under the influence of this French textbook, but it does not establish a literal translation.
- Algebraically, maximality says that $E/\mathcal X$ is a field; in the Cauchy-sequence construction, this quotient field is a model of the real numbers.
