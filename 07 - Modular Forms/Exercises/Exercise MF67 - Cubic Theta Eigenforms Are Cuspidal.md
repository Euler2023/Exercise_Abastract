---
title: "Exercise MF67: Cubic Theta Eigenforms Are Cuspidal"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.11, Exercise 5.11.3, printed p. 214, PDF p. 228"
source_refs:
  - "S7/ch-5/sec-11/ex-3"
created: 2026-10-28
---

# Exercise MF67: Cubic Theta Eigenforms Are Cuspidal

## Problem Statement

> [!question] Original Exercise 5.11.3
> Let $A$ be the ring $\mathbb Z[\mu_3]$. Recall the statement of Cubic Reciprocity in Section 4.11: Let $d\in\mathbb Z^+$ be cubefree and let $N=3\prod_{p\mid d}p$. Then there exists a character
> $$
> \chi:(A/NA)^*\longrightarrow\{1,\mu_3,\mu_3^2\}
> $$
> such that the multiplicative extension of $\chi$ to all of $A$ is trivial on $A^*$ and on primes $p\nmid N$, while on elements $\pi$ of $A$ such that $\pi\overline\pi$ is a prime $p\nmid N$ it is trivial if and only if $d$ is a cube modulo $p$. The character $\chi$ is nontrivial if $d>1$. Define $\psi(\overline n)=\chi(n)(n/3)$ (Legendre symbol) for $\overline n\in(\mathbb Z/3N^2\mathbb Z)^*$ and let $\theta_\chi\in M_1(3N^2,\psi)$ be the corresponding modular form constructed in Section 4.11, shown to be a normalized eigenform at the end of Section 5.9. This exercise shows that $\theta_\chi$ is a cusp form if $d>1$. The proof is by contradiction. Thus take $d>1$ and suppose that $\theta_\chi$ is not a cusp form.
>
> (a) For any positive integers $t,u,v$ such that $tuv\mid3N^2$ and any Dirichlet characters $\phi$ and $\varphi$ modulo $u$ and $v$ with $\phi\varphi=\psi$ at level $3N^2$ recall the Eisenstein series $E_1^{\phi,\varphi,t}\in E_1(3N^2,\psi)$. According to Theorem 4.8.1 the set of such Eisenstein series is a basis. Use the idea of Exercise 5.8.6(a) to show that there exist such $u,v,\phi,\varphi$ such that
> $$
> a_p(E_1^{\phi,\varphi}/2)=a_p(\theta_\chi)\quad\text{for all }p\nmid3N^2.
> $$
> (b) Show that $\phi(n)=-\varphi(n)$ for all $\overline n\in(\mathbb Z/3N^2\mathbb Z)^*$ such that $n\equiv2\pmod3$. Deduce that
> $$
> \phi(n)=\varphi(n)(n/3),\qquad\overline n\in(\mathbb Z/3N^2\mathbb Z)^*.
> $$
> (c) Show that $\phi^2$ is trivial and so $a_p(\theta_\chi)\in\{\pm2\}$ for all $p\equiv1\pmod3$ such that $p\nmid N$. Deduce that $\chi(\pi)\in\{\pm1\}$ for all primes $\pi$ of $A$ not dividing $N$ (cf. Section 5.9), so $\chi$ is trivial or quadratic. This contradiction shows that $\theta_\chi$ is a cusp form.

## Hints

> [!hint]- Hint 1
> Project the assumed noncuspidal eigenform to its nonzero Eisenstein component, and use a product of good-prime Hecke annihilators.

> [!hint]- Hint 2
> For inert primes the theta coefficient is zero. Use Dirichlet's theorem to reach every residue class which is $2$ modulo $3$.

> [!hint]- Hint 3
> The restriction of $\chi$ to rational units is trivial. Hence $\psi$ is the quadratic character modulo $3$, and the product relation forces the remaining character to be quadratic.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Set $L=3N^2$ and write $\eta(n)=(n/3)$ on $(\mathbb Z/L\mathbb Z)^*$. The given triviality of $\chi$ on rational primes outside $N$ implies $\chi(n)=1$ for every rational integer coprime to $N$, by ordinary prime factorization and multiplicativity. Thus $\psi=\eta$ on units modulo $L$.
>
> **(a).** The Hecke-stable decomposition $M_1(L,\psi)=S_1(L,\psi)\oplus E_1(L,\psi)$ gives $\theta_\chi=F+G$, with $G\ne0$ under the noncuspidality assumption. Comparison of the components in each good-prime eigenvalue equation makes $G$ an eigenvector with eigenvalue $a_p(\theta_\chi)$. The Eisenstein basis theorem in weight one indexes its blocks by unordered primitive pairs. On the block $(\phi,\varphi)$, every good $T_p$ acts by $\phi(p)+\varphi(p)$, since $p$ divides no degeneracy index.
>
> If every block had a good prime at which this eigenvalue differed from that of $\theta_\chi$, choose one such prime for each of the finitely many blocks. The commuting product of operators $T_p-(\phi(p)+\varphi(p))I$ annihilates every Eisenstein block, hence $G$, but acts on $G$ as a product of nonzero scalars. This contradicts $G\ne0$. Therefore some pair has the claimed equality for every good prime. We may choose primitive inducing characters as in Theorem 4.8.1; their lifts to units modulo $L$ are denoted by the same letters.
>
> **(b).** At an inert rational prime $p\equiv2\pmod3$, the Eisenstein integer ring has no element of norm $p$, so the theta coefficient formula gives $a_p(\theta_\chi)=0$. Part (a) thus gives $\phi(p)+\varphi(p)=0$ for good inert primes. Given a unit class $a\pmod L$ with $a\equiv2\pmod3$, Dirichlet's theorem supplies a prime in that class outside the finitely many excluded primes. Character values depend only on that class, giving $\phi(a)=-\varphi(a)$.
>
> For a unit class $a\equiv1\pmod3$, choose any unit class $b\equiv2\pmod3$ (for example $-1$). Then $ab\equiv2\pmod3$, and the already proved equalities at $b$ and $ab$ imply
> $$
> \phi(a)\phi(b)=\phi(ab)=-\varphi(ab)=-\varphi(a)\varphi(b)=\varphi(a)\phi(b).
> $$
> Since character values on units are nonzero, cancel $\phi(b)$ to get $\phi(a)=\varphi(a)$. Combining both cases gives $\phi=\varphi\eta$ on all units.
>
> **(c).** The product condition and $\psi=\eta$ yield $\varphi^2\eta=\phi\varphi=\eta$, so $\varphi^2=1$ and hence $\phi^2=1$. For a good split prime, $\eta(p)=1$, so
> $$
> a_p(\theta_\chi)=\phi(p)+\varphi(p)=2\phi(p)\in\{\pm2\}.
> $$
> Factor $p=\pi\overline\pi$ in $A$. Section 5.9's coefficient formula gives $a_p(\theta_\chi)=\chi(\pi)+\chi(\overline\pi)$. Moreover $\chi(\pi)\chi(\overline\pi)=\chi(p)=1$. The character values have modulus one, so a sum of $\pm2$ forces both summands to be $1$ or both to be $-1$; equivalently the two unit complex numbers have equality in the triangle inequality and the specified real sum. Thus $\chi(\pi)\in\{\pm1\}$. At an inert prime of $A$ the generator is the rational prime $p$, for which $\chi(p)=1$. The only ramified prime lies above $3$, which divides $N$ and is excluded. These cases cover all primes of $A$ not dividing $N$.
>
> Unique factorization in $A$, together with triviality on its units, shows that $\chi$ takes only $\pm1$ on every element coprime to $NA$, hence is trivial or quadratic on $(A/NA)^*$. But by construction its values also lie in the third roots of unity. The intersection $\{\pm1\}\cap\{1,\mu_3,\mu_3^2\}$ is $\{1\}$, so $\chi$ is actually trivial, contradicting the given nontriviality for $d>1$. The supposition that $\theta_\chi$ is not cuspidal is false.

## Related Concepts

- [[07 - Modular Forms/Concepts/Hecke Operators]]
- [[07 - Modular Forms/Concepts/Cusp Forms]]
- [[07 - Modular Forms/Concepts/Petersson Inner Product]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.11.3, printed p. 214 / PDF p. 228]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Proof inputs:** Cubic reciprocity and nontriviality are hypotheses explicitly recalled by the exercise, rather than conclusions proved here. The Eisenstein basis theorem at weight one, Hecke stability, unique factorization in $\mathbb Z[\mu_3]$, and Dirichlet's theorem are the named imported inputs. The split/inert theta coefficient formulas were checked on printed pp.203–204/PDF pp.217–218.
- **Basis wording:** Theorem 4.8.1 uses primitive inducing characters and unordered pairs; allowing every duplicate ordering or every imprimitive description would repeat basis elements. The argument uses one representative for each actual pair block and does not depend on that redundancy.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
